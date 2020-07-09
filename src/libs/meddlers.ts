import {IDefaultState} from "../store/states/types";

export const IsAuth = (history, state: IDefaultState) => {
    if (state.account.isGuest) {
        throw () => history.push('/');
    }

    return true;
}

export const IsGuest = (history, state: IDefaultState) => {
    console.log(state.account);
    if (!state.account.isGuest) {
        throw () => history.push('/');
    }

    return true;
}
