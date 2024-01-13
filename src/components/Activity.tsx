import { TagItem } from "@mutinywallet/mutiny-wasm";
import { cache, createAsync, revalidate } from "@solidjs/router";
import { Plus, Search, Shuffle } from "lucide-solid";
import { createEffect, createSignal, For, Match, Show, Switch } from "solid-js";

import {
    ActivityDetailsModal,
    Card,
    HackActivityType,
    NiceP
} from "~/components";
import { useMegaStore } from "~/state/megaStore";
import { timeAgo } from "~/utils";

import { GenericItem } from "./GenericItem";

export interface IActivityItem {
    kind: HackActivityType;
    id: string;
    amount_sats: number;
    inbound: boolean;
    labels: string[];
    contacts: TagItem[];
    last_updated: number;
}

export function UnifiedActivityItem(props: {
    item: IActivityItem;
    onClick: (id: string, kind: HackActivityType) => void;
}) {
    const click = () => {
        props.onClick(
            props.item.id,
            props.item.kind as unknown as HackActivityType
        );
    };

    const primaryContact = () => {
        if (props.item.contacts.length === 0) {
            return undefined;
        }
        return props.item.contacts[0];
    };

    // TODO: figure out what other shit we should filter out
    const message = () => {
        const filtered = props.item.labels.filter(
            (l) => l !== "SWAP" && !l.startsWith("LN Channel:")
        );
        if (filtered.length === 0) {
            return undefined;
        }

        return filtered[0];
    };

    const shouldShowShuffle = () => {
        return (
            props.item.kind === "ChannelOpen" ||
            props.item.kind === "ChannelClose" ||
            (props.item.labels.length > 0 && props.item.labels[0] === "SWAP")
        );
    };

    const verb = () => {
        if (props.item.kind === "ChannelOpen") {
            return "opened a";
        }
        if (props.item.kind === "ChannelClose") {
            return "closed a";
        }
        if (props.item.labels.length > 0 && props.item.labels[0] === "SWAP") {
            return "swapped to";
        }
        if (
            props.item.labels.length > 0 &&
            props.item.labels[0] === "Swept Force Close"
        ) {
            return undefined;
        }

        return "sent";
    };

    const primaryName = () => {
        return props.item.inbound ? primaryContact()?.name || "Unknown" : "You";
    };

    const secondaryName = () => {
        if (props.item.labels.length > 0 && props.item.labels[0] === "SWAP") {
            return "Lightning";
        }
        if (
            props.item.kind === "ChannelOpen" ||
            props.item.kind === "ChannelClose"
        ) {
            return "Lightning channel";
        }
        if (!props.item.inbound) {
            return primaryContact()?.name || "Unknown";
        }
        return "you";
    };

    const shouldShowGeneric = () => {
        if (props.item.inbound && primaryName() === "Unknown") {
            return true;
        }

        if (!props.item.inbound && secondaryName() === "Unknown") {
            return true;
        }
    };

    return (
        <>
            <button class="pt-3 first-of-type:pt-0" onClick={() => click()}>
                <GenericItem
                    primaryAvatarUrl={primaryContact()?.image_url || ""}
                    icon={shouldShowShuffle() ? <Shuffle /> : undefined}
                    primaryName={
                        props.item.inbound
                            ? primaryContact()?.name || "Unknown"
                            : "You"
                    }
                    genericAvatar={shouldShowGeneric()}
                    verb={verb()}
                    message={message()}
                    secondaryName={secondaryName()}
                    amount={
                        props.item.amount_sats
                            ? BigInt(props.item.amount_sats || 0)
                            : undefined
                    }
                    date={timeAgo(props.item.last_updated)}
                    accent={props.item.inbound ? "green" : undefined}
                    visibility={
                        props.item.kind === "Lightning" ? "private" : undefined
                    }
                />
            </button>
        </>
    );
}

export function CombinedActivity() {
    const [state, _actions] = useMegaStore();

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

    const getActivity = cache(async () => {
        try {
            console.log("refetching activity");
            const activity = await state.mutiny_wallet?.get_activity();
            return (activity || []) as IActivityItem[];
        } catch (e) {
            console.error(e);
            return [] as IActivityItem[];
        }
    }, "activity");

    const activity = createAsync(() => getActivity(), { initialValue: [] });

    createEffect(() => {
        // Should re-run after every sync
        if (!state.is_syncing) {
            revalidate("activity");
        }
    });

    return (
        <>
            <Show when={detailsId() && detailsKind()}>
                <ActivityDetailsModal
                    open={detailsOpen()}
                    kind={detailsKind()}
                    id={detailsId()}
                    setOpen={setDetailsOpen}
                />
            </Show>
            <Switch>
                <Match when={activity().length === 0}>
                    <Card>
                        <NiceP>Welcome to the Mutiny.</NiceP>
                    </Card>
                    <Card>
                        {/* <NiceP>TODO: copywriting lol</NiceP> */}
                        <NiceP>
                            <span>
                                <Plus class="inline-block text-m-red" />
                            </span>{" "}
                            to receive your first sats.
                        </NiceP>
                        {/* <NiceP>
                            {i18n.t(
                                "activity.receive_some_sats_to_get_started"
                            )}
                        </NiceP> */}
                    </Card>
                    <Card>
                        <NiceP>
                            <span>
                                <Search class="inline-block text-m-red" />
                            </span>{" "}
                            to find your friends on nostr.
                        </NiceP>
                    </Card>
                    <Card>
                        <NiceP>Don't forget to back up your seed words!</NiceP>
                    </Card>
                </Match>
                <Match when={activity().length >= 0}>
                    <div class="flex w-full flex-col divide-y divide-m-grey-800 overflow-x-clip">
                        <For each={activity()}>
                            {(activityItem) => (
                                <UnifiedActivityItem
                                    item={activityItem}
                                    onClick={openDetailsModal}
                                />
                            )}
                        </For>
                    </div>
                </Match>
            </Switch>
        </>
    );
}
