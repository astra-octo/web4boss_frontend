import { combineReducers } from 'redux';
import {CoreReducer} from "./core";
import {AccountReducer} from "./account";

export default combineReducers({
    core: CoreReducer,
    account: AccountReducer,
})
