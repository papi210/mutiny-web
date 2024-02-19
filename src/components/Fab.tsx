import { useNavigate } from "@solidjs/router";
import { ArrowDownLeft, ArrowUpRight, Plus, Scan } from "lucide-solid";
import { createSignal, JSX, onCleanup, onMount, Show } from "solid-js";

import { Circle } from "~/components";

function FabMenuItem(props: {
    onClick: () => void;
    disabled: boolean;
    children: JSX.Element;
}) {
    return (
        <button
            class="flex gap-2 px-2 py-4 disabled:opacity-50"
            disabled={props.disabled}
            onClick={() => props.onClick()}
        >
            {props.children}
        </button>
    );
}

export function FabMenu(props: {
    setOpen: (open: boolean) => void;
    children: JSX.Element;
    right?: boolean;
    left?: boolean;
}) {
    let navRef: HTMLElement;

    const handleClickOutside = (e: MouseEvent) => {
        if (e.target instanceof Element && !navRef.contains(e.target)) {
            e.stopPropagation();
            props.setOpen(false);
        }
    };

    onMount(() => {
        document.body.addEventListener("click", handleClickOutside);
    });

    onCleanup(() => {
        document.body.removeEventListener("click", handleClickOutside);
    });

    return (
        <nav
            ref={(el) => (navRef = el)}
            class="fixed rounded-xl bg-neutral-700/30 px-2 backdrop-blur-lg"
            classList={{
                "right-8 bottom-[calc(2rem+5rem)]": props.right,
                "left-4 bottom-[calc(2rem+2rem)]": props.left
            }}
        >
            {props.children}
        </nav>
    );
}

export function Fab(props: { onSearch: () => void; onScan: () => void }) {
    const [open, setOpen] = createSignal(false);
    const navigate = useNavigate();

    return (
        <>
            <Show when={open()}>
                <FabMenu setOpen={setOpen} right>
                    <ul class="flex flex-col divide-y divide-m-grey-400/25">
                        <li>
                            <FabMenuItem
                                onClick={() => {
                                    props.onSearch();
                                    setOpen(false);
                                }}
                            >
                                <ArrowUpRight />
                                Send
                            </FabMenuItem>
                        </li>
                        <li>
                            <FabMenuItem onClick={() => navigate("/receive")}>
                                <ArrowDownLeft />
                                Recieve
                            </FabMenuItem>
                        </li>

                        <li>
                            <FabMenuItem
                                onClick={() => {
                                    setOpen(false);
                                    props.onScan();
                                }}
                            >
                                <Scan />
                                Scan
                            </FabMenuItem>
                        </li>
                    </ul>
                </FabMenu>
            </Show>
            <div class="fixed bottom-8 right-8 text-m-red">
                <button onClick={() => setOpen(!open())}>
                    <Circle size="large">
                        <Plus class="h-8 w-8" />
                    </Circle>
                </button>
            </div>
        </>
    );
}

export function MiniFab(props: {
    onSend: () => void;
    onRequest: () => void;
    onScan: () => void;
    sendDisabled?: boolean | undefined;
}) {
    const [open, setOpen] = createSignal(false);
    return (
        <>
            <Show when={open()}>
                <FabMenu setOpen={setOpen} left>
                    <ul class="flex flex-col divide-y divide-m-grey-400/25">
                        <li>
                            <FabMenuItem
                                disabled={props.sendDisabled || false}
                                onClick={() => {
                                    props.onSend();
                                    setOpen(false);
                                }}
                            >
                                <ArrowUpRight />
                                Send
                            </FabMenuItem>
                        </li>
                        <li>
                            <FabMenuItem
                                onClick={() => {
                                    props.onRequest();
                                    setOpen(false);
                                }}
                            >
                                <ArrowDownLeft />
                                Request
                            </FabMenuItem>
                        </li>

                        <li>
                            <FabMenuItem
                                onClick={() => {
                                    props.onScan();
                                    setOpen(false);
                                }}
                            >
                                <Scan />
                                Scan
                            </FabMenuItem>
                        </li>
                    </ul>
                </FabMenu>
            </Show>
            <button onClick={() => setOpen(true)}>
                <Plus class="h-8 w-8 text-m-red" />
            </button>
        </>
    );
}
