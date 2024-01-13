import { A } from "@solidjs/router";
import { createMemo, Show } from "solid-js";
import { QRCodeSVG } from "solid-qr-code";

import {
    BackLink,
    BalanceBox,
    DefaultMain,
    FancyCard,
    KeyValue,
    LabelCircle,
    MiniStringShower,
    MutinyWalletGuard,
    NavBar,
    SafeArea
} from "~/components";
import { useMegaStore } from "~/state/megaStore";

export function Profile() {
    const [state, _actions] = useMegaStore();

    const npub = () => state.mutiny_wallet?.get_npub();

    const profile = createMemo(() => {
        const profile = state.mutiny_wallet?.get_nostr_profile();

        return {
            name: profile?.display_name || profile?.name || "Anon",
            picture: profile?.picture || undefined,
            // TODO: this but for real
            lud16: profile?.lud16 || "elegant-giraffe@mutiny.plus"
        };
    });

    return (
        <MutinyWalletGuard>
            <SafeArea>
                <DefaultMain>
                    <BackLink />
                    <div class="flex flex-col items-center gap-4">
                        <Show when={profile()}>
                            <LabelCircle
                                contact
                                label={false}
                                name={profile().name ? profile().name : "Anon"}
                                image_url={
                                    profile().picture
                                        ? profile().picture
                                        : `https://bitcoinfaces.xyz/api/get-image?name=${npub()}&onchain=false`
                                }
                                size="xl"
                            />
                            <h1 class="text-3xl font-semibold">
                                <Show when={profile().name}>
                                    {profile().name}
                                </Show>
                            </h1>

                            <p class="break-all text-center font-system-mono text-base text-m-grey-350">
                                {profile().lud16}
                            </p>

                            <div class="w-[10rem] rounded bg-white p-[1rem]">
                                <QRCodeSVG
                                    value={profile().lud16}
                                    class="h-full max-h-[256px] w-full"
                                />
                            </div>
                            <A
                                href="#"
                                class="text-xl font-semibold text-m-red no-underline active:text-m-red/80"
                            >
                                Edit Profile
                            </A>
                        </Show>

                        <Show when={!profile()}>
                            <A
                                href="#"
                                class="text-xl font-semibold text-m-red no-underline active:text-m-red/80"
                            >
                                Create Profile
                            </A>
                        </Show>
                    </div>
                    {/* <LargeHeader>Accounts</LargeHeader> */}
                    <BalanceBox loading={state.wallet_loading} />
                    <FancyCard title="Nostr">
                        <KeyValue key="npub">
                            <MiniStringShower text={npub() || ""} />
                        </KeyValue>
                    </FancyCard>
                    <div class="h-4" />
                </DefaultMain>
                <NavBar activeTab="profile" />
            </SafeArea>
        </MutinyWalletGuard>
    );
}
