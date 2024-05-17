import { configureStore } from "@reduxjs/toolkit";
import jewelrySlice from "./features/jewelrySlice";
import loginSlice from "./features/loginSlice";
import searchSlice from "./features/searchSlice";

const store= configureStore({
    reducer:{
        jewelrySlice,
        loginSlice,
        search: searchSlice,
    }
})

export default store;
