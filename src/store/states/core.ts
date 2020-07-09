import {Organization} from "./types";

export interface ICoreState {
    organization: Organization;
}

export const InitialCoreState: ICoreState = {
    organization: null,
}
