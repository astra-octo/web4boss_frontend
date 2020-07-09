import {IAccountState, InitialAccountState} from "../states/account";
import {AccountActions, EAccountActions} from "../actions/account";

export const AccountReducer = (state: IAccountState = InitialAccountState, action: AccountActions) => {
    switch (action.type) {
        case EAccountActions.LoadAccountSuccess:
            return {
                ...state,
                account: action.payload,
                isGuest: false,
                isLoaded: true,
            };
        case EAccountActions.LoadAccountFailed:
            return {
                ...state,
                account: null,
                isGuest: true,
                isLoaded: true,
            }
        default:
            return state;
    }
}
