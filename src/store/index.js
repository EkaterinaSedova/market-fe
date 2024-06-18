import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./CategorySlice/categorySlice";
import reviewSlice from "./ReviewSlice/reviewSlice";
import usersSlice from "./UserSlice/userSlice"
import itemsSlice from "./ItemSlice/itemSlice"

export const store = configureStore({
    reducer: {
        users: usersSlice,
        items: itemsSlice,
        categories: categorySlice,
        reviews: reviewSlice,
    },
    devTools: true,
});