import {Account} from "../states/types";
import {AccountService} from "../../libs/Account/AccountService";

export enum EAccountActions {
    LoadAccount= '[Account] load account',
    LoadAccountSuccess= '[Account] load account success',
    LoadAccountFailed= '[Account] load account failed',
}

/**
 * --------------- Interfaces -----------------
 */

export interface IAccountLoad {
    type: typeof EAccountActions.LoadAccount;
}

export interface IAccountLoadSuccess {
    type: typeof EAccountActions.LoadAccountSuccess;
    payload: Account;
}

export interface IAccountLoadFailed {
    type: typeof EAccountActions.LoadAccountFailed;
}


export function AccountLoad() {
    return async (dispatch) => {
        try {
            const account = await AccountService.init().loadAccount();
            dispatch(AccountLoadSuccess(account));
        } catch (e) {
            dispatch(AccountLoadFailed());
        }
    }
}

export function AccountLoadSuccess(payload: Account) {
    return {
        type: typeof EAccountActions.LoadAccountSuccess,
        payload
    }
}

export function AccountLoadFailed() {
    return {
        type: typeof EAccountActions.LoadAccountFailed,
    }
}

export type AccountActions = IAccountLoad | IAccountLoadSuccess | IAccountLoadFailed;
