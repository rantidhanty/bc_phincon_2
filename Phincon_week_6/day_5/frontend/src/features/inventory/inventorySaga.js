import { put, takeLatest } from "redux-saga/effects";
import { fetchRequest, fetchSuccess, fetchFailure } from "./inventorySlice";

const API_URL = import.meta.env.VITE_API_URL;

async function fetchData() {
  const response = await fetch(`${API_URL}/product`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
}

function* fetchAPI() {
  try {
    const response = yield fetchData();
    yield put(fetchSuccess(response));
  } catch (error) {
    yield put(fetchFailure(error.message));
  }
}

export default function* inventorySaga() {
  yield takeLatest(fetchRequest.type, fetchAPI);
}
