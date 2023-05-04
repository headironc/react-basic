import { useStore } from "~/store/store.ts";

export default function Home() {
    const currentUser = useStore(state => state.currentUser);

    console.log(currentUser);

    return <></>;
}
