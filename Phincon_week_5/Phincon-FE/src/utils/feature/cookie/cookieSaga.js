import { put, takeLatest } from "redux-saga/effects";
import Cookies from "js-cookie";
import { getCookie } from "./cookieSlice";

function* getCookieDispatch() {
  const cookie = yield Cookies.get("user");
  yield put(getCookie(cookie));
}

export default function* cookieSaga() {
  yield takeLatest(getCookie.type, getCookieDispatch);
}
