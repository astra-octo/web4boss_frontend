import {Organization} from "../states/types";
import {CoreService} from '../../libs/Core/CoreService';

export enum ECoreActions {
    LoadOrganization= '[Core] load organization',
    LoadOrganizationSuccess= '[Core] load organization success',
    LoadOrganizationFailed= '[Core] load organization failed',
}

/**
 * --------------- Interfaces -----------------
 */

export interface ICoreLoadOrganization {
    type: typeof ECoreActions.LoadOrganization;
}

export interface ICoreLoadOrganizationSuccess {
    type: typeof ECoreActions.LoadOrganizationSuccess;
    payload: Organization;
}

export interface ICoreLoadOrganizationFailed {
    type: typeof ECoreActions.LoadOrganizationFailed;
}

/* *
*  --------------- CREATORS -----------------
* */
export function CoreLoadOrganization() {
    return async (dispatch) => {
        try {
            const organization = await CoreService.init().loadOrganization();
            dispatch(CoreLoadOrganizationSuccess(organization));
        } catch (e) {
            dispatch(CoreLoadOrganizationFailed());
        }
    }
}

export function CoreLoadOrganizationSuccess(payload: Organization): ICoreLoadOrganizationSuccess {
    return {
        type: ECoreActions.LoadOrganizationSuccess,
        payload,
    }
}

export function CoreLoadOrganizationFailed(): ICoreLoadOrganizationFailed {
    return {
        type: ECoreActions.LoadOrganizationFailed,
    }
}

export type CoreActions = ICoreLoadOrganization | ICoreLoadOrganizationSuccess | ICoreLoadOrganizationFailed;
