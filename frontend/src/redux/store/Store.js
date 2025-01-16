import { configureStore } from "@reduxjs/toolkit";

import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import  productSlice  from "../features/productSlice";
import  basketSlice  from "../features/basketSlice";


const persistProductConfig = {
  key: "products",
  storage,
};
const persistbasketConfig = {
  key: "basket",
  storage,
};

const persistedProductReducer = persistReducer(
  persistProductConfig,
  productSlice
);
const persistedbasketReducer = persistReducer(
  persistbasketConfig,
  basketSlice
);

const store = configureStore({
  reducer: {
    products: persistedProductReducer,
    basket:persistedbasketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persistor = persistStore(store);
