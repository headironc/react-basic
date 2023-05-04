import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { AuthSlice, createAuthSlice } from "~/store/auth.ts";

export type State = AuthSlice;

export const useStore = create<State>()(
    devtools(
        persist(
            (...params) => ({
                ...createAuthSlice(...params),
            }),
            {
                name: "storage",
            }
        )
    )
);
