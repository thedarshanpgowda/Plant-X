import { configureStore } from "@reduxjs/toolkit";
import initialSlice from "./initialSlice";

const store = configureStore({
    reducer : {
        initial : initialSlice
    }
})

export default store