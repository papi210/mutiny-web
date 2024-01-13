import { ParentComponent } from "solid-js";

import { AmountFiat, AmountSats } from "~/components";

export const ActivityAmount: ParentComponent<{
    amount: string;
    price: number;
    positive?: boolean;
    center?: boolean;
}> = (props) => {
    return (
        <div
            class="flex flex-col gap-1"
            classList={{
                "items-end": !props.center,
                "items-center": props.center
            }}
        >
            <div
                class="justify-end"
                classList={{ "text-m-green": props.positive }}
            >
                <AmountSats
                    amountSats={Number(props.amount)}
                    icon={props.positive ? "plus" : undefined}
                />
            </div>
            <div class="text-sm text-white/70">
                <AmountFiat
                    amountSats={Number(props.amount)}
                    denominationSize="sm"
                />
            </div>
        </div>
    );
};

export type HackActivityType =
    | "Lightning"
    | "OnChain"
    | "ChannelOpen"
    | "ChannelClose";
