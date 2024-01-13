import { A } from "@solidjs/router";
import { Scan } from "lucide-solid";
import { Suspense } from "solid-js";

import { ActualSearch, NavBar } from "~/components";
import {
    BackLink,
    DefaultMain,
    MutinyWalletGuard,
    SafeArea
} from "~/components/layout";

export function Search() {
    return (
        <MutinyWalletGuard>
            <SafeArea>
                <DefaultMain zeroBottomPadding={true}>
                    <div class="flex items-center justify-between">
                        <BackLink />
                        <A
                            class="rounded-lg p-2 hover:bg-white/5 active:bg-m-blue md:hidden"
                            href="/scanner"
                        >
                            <Scan class="h-6 w-6" />
                        </A>{" "}
                    </div>
                    {/* Need to put the search view in a supsense so it loads list on first nav */}
                    <Suspense>
                        <ActualSearch />
                    </Suspense>
                </DefaultMain>
                <NavBar activeTab="send" />
            </SafeArea>
        </MutinyWalletGuard>
    );
}
