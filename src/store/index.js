import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        users: usersSlice,
        items: itemsSlice,
    },
    devTools: true,
});