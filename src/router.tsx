import { App as CapacitorApp } from "@capacitor/app";
import { Capacitor } from "@capacitor/core";
import { StatusBar, Style } from "@capacitor/status-bar";
import { MetaProvider, Title } from "@solidjs/meta";
import { Route, Router as SolidRouter, useNavigate } from "@solidjs/router";
import {
    ErrorBoundary,
    JSX,
    Match,
    onCleanup,
    Suspense,
    Switch
} from "solid-js";

import {
    ErrorDisplay,
    I18nProvider,
    SetupErrorDisplay,
    Toaster
} from "~/components";
import {
    Chat,
    Feedback,
    Gift as GiftReceive,
    ImportProfile,
    Main,
    NewProfile,
    NotFound,
    Profile,
    Receive,
    RequestRoute,
    Scanner,
    Scratchpad,
    Search,
    Send,
    Setup,
    Swap,
    SwapLightning
} from "~/routes";
import {
    Admin,
    Backup,
    Channels,
    Connections,
    Currency,
    EmergencyKit,
    Encrypt,
    Gift,
    Language,
    ManageFederations,
    Plus,
    Restore,
    Servers,
    Settings,
    SyncNostrContacts
} from "~/routes/settings";
import { Provider as MegaStoreProvider, useMegaStore } from "~/state/megaStore";

function GlobalListeners() {
    // listeners for native navigation handling
    // Check if the platform is Android to handle back
    if (Capacitor.getPlatform() === "android") {
        const { remove } = CapacitorApp.addListener(
            "backButton",
            ({ canGoBack }) => {
                if (!canGoBack) {
                    CapacitorApp.exitApp();
                } else {
                    window.history.back();
                }
            }
        );

        // Ensure the listener is cleaned up when the component is destroyed
        onCleanup(() => {
            console.debug("cleaning up backButton listener");
            remove();
        });
    }

    // Handle app links on native platforms
    if (Capacitor.isNativePlatform()) {
        const navigate = useNavigate();
        const { remove } = CapacitorApp.addListener("appUrlOpen", (data) => {
            const url = new URL(data.url);
            const path = url.pathname;
            const urlParams = new URLSearchParams(url.search);

            console.log(`Navigating to ${path}?${urlParams.toString()}`);
            navigate(`${path}?${urlParams.toString()}`);
        });

        onCleanup(() => {
            console.debug("cleaning up appUrlOpen listener");
            remove();
        });
    }

    return null;
}

const setStatusBarStyleDark = async () => {
    await StatusBar.setStyle({ style: Style.Dark });
};

if (Capacitor.isNativePlatform()) {
    await setStatusBarStyleDark();
}

function ChildrenOrError(props: { children: JSX.Element }) {
    const [state, _] = useMegaStore();

    return (
        <Switch>
            <Match when={state.setup_error}>
                <SetupErrorDisplay
                    initialError={state.setup_error!}
                    password={state.password}
                />
            </Match>
            <Match when={true}>{props.children}</Match>
        </Switch>
    );
}

// TODO: do we still need setup error display?
export function Router() {
    return (
        <SolidRouter
            root={(props) => (
                <MetaProvider>
                    <Title>Mutiny Wallet</Title>
                    <ErrorBoundary fallback={(e) => <ErrorDisplay error={e} />}>
                        <GlobalListeners />
                        <Suspense>
                            <ErrorBoundary
                                fallback={(e) => <ErrorDisplay error={e} />}
                            >
                                <MegaStoreProvider>
                                    <I18nProvider>
                                        <ErrorBoundary
                                            fallback={(e) => (
                                                <ErrorDisplay error={e} />
                                            )}
                                        >
                                            <ChildrenOrError>
                                                {props.children}
                                            </ChildrenOrError>
                                            <Toaster />
                                        </ErrorBoundary>
                                    </I18nProvider>
                                </MegaStoreProvider>
                            </ErrorBoundary>
                        </Suspense>
                    </ErrorBoundary>
                </MetaProvider>
            )}
        >
            <Route path="/" component={Main} />
            <Route path="/setup" component={Setup} />
            <Route path="/newprofile" component={NewProfile} />
            <Route path="/importprofile" component={ImportProfile} />
            <Route path="/profile" component={Profile} />
            <Route path="/scratchpad" component={Scratchpad} />
            <Route path="/chat/:id" component={Chat} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/gift" component={GiftReceive} />
            <Route path="/receive" component={Receive} />
            <Route path="/request/:id" component={RequestRoute} />
            <Route path="/scanner" component={Scanner} />
            <Route path="/send" component={Send} />
            <Route path="/swap" component={Swap} />
            <Route path="/swaplightning" component={SwapLightning} />
            <Route path="/search" component={Search} />
            <Route path="/settings">
                <Route path="/" component={Settings} />
                <Route path="/admin" component={Admin} />
                <Route path="/backup" component={Backup} />
                <Route path="/channels" component={Channels} />
                <Route path="/connections" component={Connections} />
                <Route path="/currency" component={Currency} />
                <Route path="/language" component={Language} />
                <Route path="/emergencykit" component={EmergencyKit} />
                <Route path="/encrypt" component={Encrypt} />
                <Route path="/gift" component={Gift} />
                <Route path="/plus" component={Plus} />
                <Route path="/restore" component={Restore} />
                <Route path="/servers" component={Servers} />
                <Route
                    path="/syncnostrcontacts"
                    component={SyncNostrContacts}
                />
                <Route path="/federations" component={ManageFederations} />
            </Route>
            <Route path="/*all" component={NotFound} />
        </SolidRouter>
    );
}
