import thehivecatlogreducer from "./reducers/thehivecatlogreducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
      catlog: thehivecatlogreducer
    }
})

export default store