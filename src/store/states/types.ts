import {ICoreState} from "./core";

export interface IDefaultState {
    core: ICoreState
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
