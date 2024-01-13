import { createAsync, useNavigate } from "@solidjs/router";
import { createMemo, createSignal, Show, Suspense } from "solid-js";

import {
    BalanceBox,
    Circle,
    DecryptDialog,
    DefaultMain,
    HomePrompt,
    HomeSubnav,
    LabelCircle,
    LoadingIndicator,
    NavBar,
    OnboardWarning,
    OverlayScanner,
    ReloadPrompt,
    SafeArea,
    SocialActionRow
} from "~/components";
import { Fab } from "~/components/Fab";
import { useMegaStore } from "~/state/megaStore";

export function WalletHeader(props: { loading: boolean }) {
    const navigate = useNavigate();
    const [state, _actions] = useMegaStore();
    const npub = () => state.mutiny_wallet?.get_npub();

    async function getProfile() {
        const profile = state.mutiny_wallet?.get_nostr_profile();

        return {
            name: profile?.display_name || profile?.name || "Anon",
            picture: profile?.picture || undefined,
            // TODO: this but for real
            lud16: profile?.lud16 || "elegant-giraffe@mutiny.plus"
        };
    }

    const profile = createAsync(() => getProfile());

    const profileImage = createMemo(() => {
        if (props.loading) {
            return undefined;
        }

        if (profile() && profile()!.picture) {
            return profile()!.picture;
        }

        return `https://bitcoinfaces.xyz/api/get-image?name=${npub()}&onchain=false`;
    });

    return (
        <header class="grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-4">
            <LabelCircle
                contact
                label={false}
                image_url={profileImage()}
                onClick={() => navigate("/profile")}
            />
            <button
                onClick={() => navigate("/profile")}
                class="crt relative grid justify-center rounded-lg border-b border-t border-b-white/10 border-t-white/40 bg-black px-4 py-2"
            >
                <BalanceBox small loading={state.wallet_loading} />
            </button>
            <Circle onClick={() => navigate("/settings")}>
                <img
                    src="/mutiny-pixel-m.png"
                    alt="mutiny"
                    width={"32px"}
                    height={"32px"}
                    style={{
                        "image-rendering": "pixelated"
                    }}
                />
            </Circle>
        </header>
    );
}

export function Main() {
    const [state, _actions] = useMegaStore();

    const navigate = useNavigate();

    const [scanner, setScanner] = createSignal(false);

    return (
        <SafeArea>
            <DefaultMain zeroBottomPadding={true}>
                {/* <LoadingIndicator /> */}
                <Show when={state.load_stage !== "done"}>
                    <WalletHeader loading={true} />
                    <div class="flex-1" />

                    <LoadingIndicator />
                    <div class="flex-1" />
                </Show>
                <Show when={state.load_stage === "done"}>
                    <Suspense>
                        <WalletHeader loading={false} />
                    </Suspense>

                    <Show when={!state.wallet_loading && !state.safe_mode}>
                        <SocialActionRow
                            onScan={() => setScanner(true)}
                            onSearch={() => navigate("/search")}
                        />
                    </Show>

                    {/* <hr class="border-t border-m-grey-700" /> */}
                    <ReloadPrompt />
                    <OnboardWarning />
                    <HomeSubnav />
                </Show>

                <Fab
                    onSearch={() => navigate("/search")}
                    onScan={() => setScanner(true)}
                />
                <Show when={scanner()}>
                    <OverlayScanner onClose={() => setScanner(false)} />
                </Show>
            </DefaultMain>

            <DecryptDialog />
            <HomePrompt />
            <NavBar activeTab="home" />
        </SafeArea>
    );
}
