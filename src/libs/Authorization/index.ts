import {IAuthorizationServiceInterface} from "./AuthorizationService.interface";
import {AuthorizationFabric} from "./Authorization.fabric";

export default (service: IAuthorizationServiceInterface) => {
    return new AuthorizationFabric(service);
}
