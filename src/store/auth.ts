import { StateCreator } from "zustand";

import { State } from "~/store/store.ts";
import { User } from "~/types/user.ts";

export interface AuthSlice {
    currentUser: User | null;
    setCurrentUser: (user: User | null) => void;
}

export const createAuthSlice: StateCreator<
    State,
    [["zustand/devtools", never]],
    [],
    AuthSlice
> = set => ({
    currentUser: null,
    setCurrentUser: (user: User | null) =>
        set({ currentUser: user }, false, "setCurrentUser"),
});
