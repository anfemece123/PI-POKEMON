import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk" // para la llamada asincrona
import rootReducer from "../reducer/index";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;