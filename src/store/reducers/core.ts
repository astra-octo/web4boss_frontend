import {ICoreState, InitialCoreState} from "../states/core";
import {CoreActions, ECoreActions} from "../actions/core";

export function CoreReducer(state: ICoreState = InitialCoreState, action: CoreActions) {
    switch (action.type) {
        case ECoreActions.LoadOrganizationSuccess:
            return {
                ...state,
                organization: action.payload,
            }
        default:
            return state;
    }
}
