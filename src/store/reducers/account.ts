import {IAccountState, InitialAccountState} from "../states/account";
import {AccountActions, EAccountActions} from "../actions/account";

export const AccountReducer = (state: IAccountState = InitialAccountState, action: AccountActions) => {
    switch (action.type) {
        case EAccountActions.LoadAccountSuccess:
            return {
                ...state,
                account: action.payload,
            };
        default:
            return state;
    }
}
