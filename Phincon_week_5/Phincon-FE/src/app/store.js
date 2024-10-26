import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cookieReducer from "../utils/feature/cookie/cookieSlice";
import cookieSaga from "../utils/feature/cookie/cookieSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    cookie: cookieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

[cookieSaga].map((saga) => {
  sagaMiddleware.run(saga);
});
