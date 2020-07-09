import {ICoreState} from "./core";
import {IAccountState} from "./account";

export interface IDefaultState {
    core: ICoreState,
    account: IAccountState,
}

export interface Organization {
    id: number;
    logo_url: string;
    name: string;
}

export interface Account {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    middle_name: string;
}
