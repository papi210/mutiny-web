import { GenericItem } from "~/components/GenericItem";

const PAUL =
    "https://cdn.satellite.earth/75fc2f4692566ddf090748e8d53cb1863ec93fa784ccedd533dcdd9ecbad159d.gif";
const UNKOWN = "/src/assets/generic-avatar.jpg";
const BEN =
    "https://primal.b-cdn.net/media-cache?s=s&a=1&u=https%3A%2F%2Fbenthecarman.com%2Fimages%2Fme-bear.png";

const TONY =
    "https://primal.b-cdn.net/media-cache?s=s&a=1&u=https%3A%2F%2Ftonygiorgio.com%2Fcontent%2Fimages%2F2023%2F02%2Ftony-giorgio-1.jpeg";

const NETFLIX =
    "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940";

const ZAPPLE_PAY =
    "https://primal.b-cdn.net/media-cache?s=s&a=1&u=htt…A%2F%2Fvoid.cat%2Fd%2FKkgR5Vy7kiDkztfyJRUCf3.webp";

export function Scratchpad() {
    return (
        <div class="flex flex-col divide-y divide-m-grey-800 p-4">
            <GenericItem
                primaryAvatarUrl={ZAPPLE_PAY}
                primaryName="Zapple Pay"
                secondaryAvatarUrl={PAUL}
                secondaryName="Paul"
                verb="zapped"
                message="From: nostr:npub1lqz2yf2tvutrxwtfnlxtdt9vdam7lwkyk95kehavvm4gfm5rx7ws0p3ak9"
                amount={1000n}
                date={"Just now"}
            />

            <GenericItem
                primaryAvatarUrl={NETFLIX}
                primaryName="Netflix"
                verb="requested"
                amount={420000n}
                date={"Just now"}
                due={"24hr"}
                showFiat
            />
            <GenericItem
                primaryAvatarUrl={BEN}
                primaryName="Benthecarman"
                verb="requested"
                amount={1000n}
                date={"Just now"}
                showFiat
            />
            <GenericItem
                primaryAvatarUrl={BEN}
                primaryName="Benthecarman"
                secondaryName="you"
                verb="paid"
                amount={1000n}
                date={"Just now"}
                accent="green"
                showFiat
            />
            <GenericItem
                primaryAvatarUrl={BEN}
                primaryName="Benthecarman"
                secondaryAvatarUrl={PAUL}
                secondaryName="you"
                verb="zapped"
                amount={1000n}
                date={"Just now"}
                accent="green"
            />
            <GenericItem
                primaryAvatarUrl={BEN}
                primaryName="Benthecarman"
                secondaryAvatarUrl={TONY}
                secondaryName="Tony"
                verb="zapped"
                message="🍣 salmon toast"
                amount={420000n}
                date={"Just now"}
                accent="green"
                visibility="public"
            />
            <GenericItem
                primaryAvatarUrl={BEN}
                primaryName="Benthecarman"
                secondaryAvatarUrl={PAUL}
                secondaryName="you"
                verb="zapped"
                message="here is a long message that must be truncated at some point"
                amount={420000n}
                date={"Just now"}
                accent="green"
                visibility="public"
            />
            <GenericItem
                primaryAvatarUrl={NETFLIX}
                primaryName="You"
                secondaryName="Netflix"
                verb="paid"
                amount={1000n}
                date={"Just now"}
                showFiat
            />
            <GenericItem
                primaryAvatarUrl={PAUL}
                primaryName="You"
                secondaryAvatarUrl={UNKOWN}
                secondaryName="someone with a stupid long name"
                verb="zapped"
                message="here is a long message that must be truncated at some point"
                amount={420000n}
                date={"Just now"}
                accent="green"
                visibility="public"
            />
        </div>
    );
}
