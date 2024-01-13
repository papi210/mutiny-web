import { Camera, CameraResultType } from "@capacitor/camera";
import { useNavigate } from "@solidjs/router";
import { createSignal, Match, Switch } from "solid-js";

import { Button, ButtonLink, DefaultMain, SimpleInput } from "~/components";
import { useMegaStore } from "~/state/megaStore";

export function NewProfile() {
    const [state, _actions] = useMegaStore();
    const [nym, setNym] = createSignal("");

    const [imageUri, setImageUri] = createSignal<string>();
    const [imageBase64, setImageBase64] = createSignal<string>();
    const [creating, setCreating] = createSignal(false);

    const navigate = useNavigate();

    // TODO: need to set android and ios permissions for this
    // https://capacitorjs.com/docs/apis/camera
    async function getPhoto() {
        const picked = await Camera.getPhoto({
            width: 512,
            presentationStyle: "popover",
            quality: 90,
            resultType: CameraResultType.Base64
        });

        setImageUri(picked.webPath);
        setImageBase64(picked.base64String);
    }

    function handleSkip() {
        localStorage.setItem("profile_setup_stage", "skipped");
        navigate("/");
    }

    async function createProfile() {
        setCreating(true);
        try {
            let imageUrl;
            const base64 = imageBase64();
            if (base64) {
                imageUrl =
                    await state.mutiny_wallet?.upload_profile_pic(base64);
            }
            // TODO: upload the image somewhere
            // const imageUrl =
            //     "https://cdn.satellite.earth/75fc2f4692566ddf090748e8d53cb1863ec93fa784ccedd533dcdd9ecbad159d.gif";
            const profile = await state.mutiny_wallet?.edit_nostr_profile(
                nym(),
                imageUrl,
                undefined,
                undefined
            );
            console.log("profile", profile);
            localStorage.setItem("profile_setup_stage", "saved");
            navigate("/");
        } catch (e) {
            console.error(e);
        }
        setCreating(false);
    }

    return (
        <DefaultMain>
            <div class="mx-auto flex max-w-[20rem] flex-1 flex-col items-center gap-4">
                <div class="flex-1" />
                <h1 class="text-3xl font-semibold">Create your profile</h1>
                <p class="text-center text-xl font-light text-neutral-200">
                    Mutiny makes payments social.
                    <br />
                    Your activity is private by default.
                </p>
                <div class="flex-1" />

                <button
                    class="flex h-[8rem] w-[8rem] flex-none items-center justify-center overflow-clip rounded-full border-b border-t border-b-white/10  border-t-white/50 bg-m-grey-800 text-5xl uppercase active:-mb-[1px] active:mt-[1px]"
                    onClick={getPhoto}
                >
                    <Switch>
                        <Match when={imageUri()}>
                            <img src={imageUri()} />
                        </Match>
                        <Match when={true}>+</Match>
                    </Switch>
                </button>

                {/* <input
                    type="file"
                    accept="image/x-png,image/jpeg,image/gif"
                    // class="flex h-[8rem] w-[8rem] flex-none items-center justify-center overflow-clip rounded-full border-b border-t border-b-white/10  border-t-white/50 bg-m-grey-800 text-5xl uppercase active:-mb-[1px] active:mt-[1px]"
                    onClick={() => {
                        console.log("click");
                    }}
                    onChange={() => console.log("uploaded")}
                /> */}
                {/* <LabelCircle
                    contact
                    label={false}
                    name="paul"
                    image_url={`https://bitcoinfaces.xyz/api/get-image?name=${npub()}&onchain=false`}
                    size="xl"
                /> */}
                <SimpleInput
                    value={nym()}
                    onInput={(e) => setNym(e.currentTarget.value)}
                    placeholder="Your name or nym"
                />
                <Button
                    layout="full"
                    onClick={createProfile}
                    loading={creating()}
                >
                    Create
                </Button>
                <div class="flex-1" />
                <div class="flex flex-col items-center">
                    <ButtonLink href="/importprofile" intent="text">
                        Import existing nostr profile
                    </ButtonLink>
                    <Button onClick={handleSkip} intent="text">
                        Skip for now
                    </Button>
                </div>
                <div class="flex-1" />
            </div>
        </DefaultMain>
    );
}
