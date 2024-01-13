import { TagItem } from "@mutinywallet/mutiny-wasm";
import { createAsync, useNavigate, useParams } from "@solidjs/router";
import { ArrowDownLeft, ArrowUpRight, Zap } from "lucide-solid";
import {
    createEffect,
    createResource,
    createSignal,
    For,
    Match,
    onCleanup,
    onMount,
    Show,
    Suspense,
    Switch
} from "solid-js";

import {
    ActivityDetailsModal,
    AmountSats,
    BackPop,
    Button,
    ContactButton,
    ContactFormValues,
    ContactViewer,
    HackActivityType,
    IActivityItem,
    LoadingShimmer,
    MutinyWalletGuard,
    showToast,
    SimpleInput,
    UnifiedActivityItem
} from "~/components";
import { MiniFab } from "~/components/Fab";
import { ParsedParams, toParsedParams } from "~/logic/waila";
import { useMegaStore } from "~/state/megaStore";
import { eify, hexpubFromNpub, timeAgo } from "~/utils";

type CombinedMessagesAndActivity =
    | { kind: "message"; content: FakeDirectMessage }
    | { kind: "activity"; content: IActivityItem };

// TODO: Use the actual type from MutinyWallet
type FakeDirectMessage = {
    from: string;
    to: string;
    message: string;
    date: number;
};

function isActivityItem(content: unknown): content is IActivityItem {
    return (content as IActivityItem).last_updated !== undefined;
}

function isDirectMessage(content: unknown): content is FakeDirectMessage {
    return (content as FakeDirectMessage).date !== undefined;
}

function SingleMessage(props: {
    dm: FakeDirectMessage;
    counterPartyNpub: string;
    counterPartyContactId: string;
}) {
    const [state, actions] = useMegaStore();
    const network = state.mutiny_wallet?.get_network() || "signet";
    const navigate = useNavigate();

    const parsed = createAsync(
        async () => {
            const result = toParsedParams(props.dm.message, network);

            if (!result.ok) {
                return undefined;
            }

            if (result.value?.invoice) {
                try {
                    const alreadyPaid = await state.mutiny_wallet?.get_invoice(
                        result.value.invoice
                    );
                    if (alreadyPaid?.paid) {
                        return {
                            type: "invoice",
                            status: "paid",
                            value: result.value.invoice,
                            amount: result.value.amount_sats
                        };
                    }
                } catch (e) {
                    // No invoice found, no worries
                }

                return {
                    type: "invoice",
                    status: "unpaid",
                    from: props.dm.from,
                    value: result.value.invoice,
                    amount: result.value.amount_sats
                };
            }
        },
        {
            initialValue: undefined
        }
    );

    function navWithContactId() {
        navigate("/send", {
            state: {
                previous: "/chat/" + props.counterPartyContactId
            }
        });
    }

    function payContact(result: ParsedParams) {
        actions.setScanResult({
            ...result,
            contact_id: props.counterPartyContactId
        });
        navWithContactId();
    }

    function handlePay() {
        actions.handleIncomingString(
            props.dm.message,
            (error) => {
                showToast(error);
            },
            payContact
        );
    }

    return (
        <div
            id="message"
            class="flex max-w-[80%] flex-col rounded-lg px-4 py-2"
            classList={{
                "bg-m-grey-750 self-start":
                    props.dm.from === props.counterPartyNpub,
                "bg-m-blue self-end": props.dm.from !== props.counterPartyNpub
            }}
        >
            <Switch>
                <Match when={parsed()?.type === "invoice"}>
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center gap-2">
                            <Zap class="h-4 w-4" />
                            <span>Lightning Invoice</span>
                        </div>
                        <AmountSats amountSats={parsed()?.amount} />
                        <Show
                            when={
                                parsed()?.status !== "paid" &&
                                parsed()?.from === props.counterPartyNpub
                            }
                        >
                            <Button
                                intent="blue"
                                layout="xs"
                                onClick={handlePay}
                            >
                                Pay
                            </Button>
                        </Show>
                        <Show when={parsed()?.status === "paid"}>
                            <p class="!mb-0 italic">Paid</p>
                        </Show>
                        <div />
                    </div>
                </Match>
                <Match when={true}>
                    <p class="!mb-0 break-words">{props.dm.message}</p>
                </Match>
            </Switch>
            <time
                class="text-xs font-light text-white/50"
                classList={{
                    "self-end": props.dm.from !== props.counterPartyNpub
                }}
            >
                {timeAgo(props.dm.date)}
            </time>
        </div>
    );
}

function MessageList(props: {
    convo: CombinedMessagesAndActivity[];
    contact: TagItem;
}) {
    let scrollRef: HTMLDivElement;

    onMount(() => {
        scrollRef.scrollIntoView();
    });

    // Details modal stuff
    const [detailsOpen, setDetailsOpen] = createSignal(false);
    const [detailsKind, setDetailsKind] = createSignal<HackActivityType>();
    const [detailsId, setDetailsId] = createSignal("");

    function openDetailsModal(id: string, kind: HackActivityType) {
        console.log("Opening details modal: ", id, kind);

        if (!id) {
            console.warn("No id provided to openDetailsModal");
            return;
        }

        setDetailsId(id);
        setDetailsKind(kind);
        setDetailsOpen(true);
    }

    return (
        <>
            <div class="flex flex-col-reverse justify-end gap-4">
                <For each={props.convo}>
                    {(combined, _index) => (
                        <>
                            <Show when={combined.kind === "activity"}>
                                <div
                                    class="w-[80%] rounded-lg bg-m-grey-750 px-4 pt-4"
                                    classList={{
                                        "self-start": (
                                            combined.content as IActivityItem
                                        ).inbound,
                                        "self-end": !(
                                            combined.content as IActivityItem
                                        ).inbound
                                    }}
                                >
                                    <UnifiedActivityItem
                                        item={combined.content as IActivityItem}
                                        onClick={openDetailsModal}
                                    />
                                </div>
                            </Show>
                            <Show when={combined.kind === "message"}>
                                <SingleMessage
                                    dm={combined.content as FakeDirectMessage}
                                    counterPartyNpub={props.contact.npub || ""}
                                    counterPartyContactId={props.contact.id}
                                />
                            </Show>
                        </>
                    )}
                </For>
            </div>
            <div ref={(el) => (scrollRef = el)} id="scroll-to-me" />
            <Show when={detailsId() && detailsKind()}>
                <ActivityDetailsModal
                    open={detailsOpen()}
                    kind={detailsKind()}
                    id={detailsId()}
                    setOpen={setDetailsOpen}
                />
            </Show>
        </>
    );
}

export function Chat() {
    const params = useParams();
    const [state, actions] = useMegaStore();

    const [messageValue, setMessageValue] = createSignal("");
    const [sending, setSending] = createSignal(false);

    const contact = createAsync(async () => {
        return state.mutiny_wallet?.get_tag_item(params.id);
    });

    const [convo, { refetch }] = createResource(
        contact,
        async (contact: TagItem, info) => {
            // if (!contact() || !contact()?.npub) return undefined;
            if (!contact.npub) return [] as CombinedMessagesAndActivity[];
            try {
                const activity = await state.mutiny_wallet?.get_label_activity(
                    params.id
                );

                console.log("activity", activity);
                const refetchingTimestamp = info.refetching as bigint;
                console.log("refetching since", refetchingTimestamp);
                const convo = await state.mutiny_wallet?.get_dm_conversation(
                    contact.npub,
                    20n,
                    undefined,
                    undefined
                );

                const dms = convo as FakeDirectMessage[];
                const acts = activity as IActivityItem[];

                // Combine both arrays into an array of CombinedMessagesAndActivity, then sort by date
                const combined = [
                    ...dms.map((dm) => ({
                        kind: "message",
                        content: dm
                    })),
                    ...acts.map((act) => ({
                        kind: "activity",
                        content: act
                    }))
                ];

                combined.sort((a, b) => {
                    const a_time = isDirectMessage(a.content)
                        ? a.content.date
                        : isActivityItem(a.content)
                        ? a.content.last_updated
                        : 0;
                    const b_time = isDirectMessage(b.content)
                        ? b.content.date
                        : isActivityItem(b.content)
                        ? b.content.last_updated
                        : 0;

                    return b_time - a_time; // Descending order
                });

                console.log("combined activity", combined);

                return combined as CombinedMessagesAndActivity[];
            } catch (e) {
                console.error("error getting convo:", e);
                return [] as CombinedMessagesAndActivity[];
            }
        }
    );

    async function sendMessage() {
        const npub = contact()?.npub;
        if (!npub) return;
        setSending(true);
        try {
            const dmResult = await state.mutiny_wallet?.send_dm(
                npub,
                messageValue()
            );
            console.log("dmResult:", dmResult);
            setMessageValue("");
            refetch();
        } catch (e) {
            console.error("error sending dm:", e);
        }
        setSending(false);
    }

    createEffect(() => {
        const interval = setInterval(() => {
            refetch();
        }, 5000); // Poll every 5 seconds
        onCleanup(() => {
            clearInterval(interval);
        });
    });

    function sendToContact(contact?: TagItem) {
        if (!contact) return;
        const address = contact.ln_address || contact.lnurl;
        if (address) {
            actions.handleIncomingString(
                (address || "").trim(),
                (error) => {
                    showToast(error);
                },
                (result) => {
                    actions.setScanResult({
                        ...result,
                        contact_id: contact.id
                    });
                    navWithContactId();
                }
            );
        } else {
            console.error("no ln_address or lnurl");
        }
    }

    function requestFromContact(contact?: TagItem) {
        if (!contact) return;
        navigate("/request/" + contact.id, {
            state: {
                previous: "/chat/" + params.id
            }
        });
    }

    const navigate = useNavigate();

    function navWithContactId() {
        navigate("/send", {
            state: {
                previous: "/chat/" + params.id
            }
        });
    }

    async function saveContact(id: string, contact: ContactFormValues) {
        console.log("saving contact", id, contact);
        const hexpub = await hexpubFromNpub(contact.npub?.trim());
        try {
            const existing = state.mutiny_wallet?.get_tag_item(id);
            // This shouldn't happen
            if (!existing) throw new Error("No existing contact");
            await state.mutiny_wallet?.edit_contact(
                id,
                contact.name,
                hexpub ? hexpub : undefined,
                contact.ln_address ? contact.ln_address.trim() : undefined,
                existing.lnurl,
                existing.image_url
            );
        } catch (e) {
            console.error(e);
            showToast(eify(e));
        }

        // TODO: refetch contact
        refetch();
    }

    async function deleteContact(id: string) {
        try {
            await state.mutiny_wallet?.delete_contact(id);
        } catch (e) {
            console.error(e);
            showToast(eify(e));
        }
        navigate("/search");
    }

    return (
        <MutinyWalletGuard>
            <main class="mx-auto grid h-[100dvh] w-full max-w-[600px] grid-cols-1 grid-rows-[minmax(10px,1fr)_4rem] flex-col overflow-y-hidden safe-top safe-bottom">
                <div class="overflow-y-auto">
                    <div class="fixed top-0 z-50 flex w-full flex-col gap-2 bg-m-grey-975/70 p-4 backdrop-blur-lg">
                        <div class="flex w-full flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <BackPop default="/" title="" />
                                <Show when={contact()}>
                                    <ContactViewer
                                        contact={contact()!}
                                        saveContact={saveContact}
                                        deleteContact={deleteContact}
                                    >
                                        <ContactButton
                                            contact={contact()!}
                                            onClick={() => {}}
                                        />
                                    </ContactViewer>
                                </Show>
                            </div>
                            <div class="flex w-full justify-around gap-4 text-m-green">
                                <button
                                    class="flex gap-2 font-semibold"
                                    onClick={() => {
                                        sendToContact(contact());
                                    }}
                                >
                                    <ArrowUpRight class="inline-block text-m-green" />
                                    <span>Send</span>
                                </button>
                                <button
                                    class="flex gap-2 font-semibold text-m-blue"
                                    onClick={() =>
                                        requestFromContact(contact())
                                    }
                                >
                                    <ArrowDownLeft class="inline-block text-m-blue" />
                                    <span>Request</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="h-[8rem]" />
                    {/* <pre class="whitespace-pre-wrap break-all">
                            {JSON.stringify(convo(), null, 2)}
                        </pre> */}
                    <div class="p-4">
                        <Suspense>
                            <Show when={contact()}>
                                <Suspense fallback={<LoadingShimmer />}>
                                    <Show when={convo.latest}>
                                        {/* TODO: figure out how not to do typecasting here */}
                                        <MessageList
                                            convo={
                                                convo.latest as CombinedMessagesAndActivity[]
                                            }
                                            contact={contact()!}
                                        />
                                    </Show>
                                </Suspense>
                            </Show>
                        </Suspense>
                        {/* <div class="h-[2rem]" /> */}
                    </div>
                </div>
                <div class="grid grid-cols-[auto_1fr_auto] grid-rows-1 items-center gap-2 p-2">
                    {/* TODO handle onscan */}
                    <MiniFab
                        onScan={() => {}}
                        onSend={() => {
                            sendToContact(contact());
                        }}
                        onRequest={() => requestFromContact(contact())}
                    />
                    <SimpleInput
                        disabled={sending()}
                        value={messageValue()}
                        onInput={(e) => setMessageValue(e.currentTarget.value)}
                        placeholder="Message"
                    />
                    <div>
                        <Show when={messageValue()}>
                            <Button
                                layout="xs"
                                intent="blue"
                                loading={sending()}
                                onClick={sendMessage}
                            >
                                Send
                            </Button>
                        </Show>
                    </div>
                </div>
            </main>
        </MutinyWalletGuard>
    );
}
