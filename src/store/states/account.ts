import {Account} from './types';

export interface IAccountState {
    account: Account;
    isGuest: boolean;
    isLoaded: false;
}

export const InitialAccountState: IAccountState = {
    account: null,
    isGuest: true,
    isLoaded: false,
};
