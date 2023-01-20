import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "./chartReducer";

const store = configureStore({
    reducer: {
        chart: chartReducer,
    },
});

export default store;