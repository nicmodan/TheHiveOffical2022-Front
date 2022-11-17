import { configureStore } from "@reduxjs/toolkit";
import getProducts from "./reducers/getProducts";
import hiveShipingOrder from "./reducers/address&orders";

const store = configureStore({
    reducer: {
        getProducts,
        hiveShipingOrder
    }
})

export default store