import {Account} from './types';

export interface IAccountState {
    account: Account;
    isGuest: boolean;
}

export const InitialAccountState: IAccountState = {
    account: null,
    isGuest: true,
};
