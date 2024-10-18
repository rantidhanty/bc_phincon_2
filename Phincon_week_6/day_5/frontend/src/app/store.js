import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import inventorySaga from "../features/inventory/inventorySaga";
import inventorySlice from "../features/inventory/inventorySlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    inventory: inventorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

[inventorySaga].map((saga) => {
  sagaMiddleware.run(saga);
});
