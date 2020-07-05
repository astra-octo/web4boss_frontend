import {IAuthorizationServiceInterface} from "./AuthorizationService.interface";

export class AuthorizationFabric {
    private readonly _service: IAuthorizationServiceInterface;

    constructor(service: IAuthorizationServiceInterface) {
        this._service = service;
    }

    get service(): IAuthorizationServiceInterface {
        return this._service;
    }
}
