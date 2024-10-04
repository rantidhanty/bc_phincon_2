import { createaStore } from "redux";
import rootReducer from "./reducers";

// const store = createStore(counterReducer);

export default createaStore(rootReducer)