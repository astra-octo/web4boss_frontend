import {IAuthorizationServiceInterface} from "../AuthorizationService.interface";
import api from "../../api";

export type IBaseAuthorizationSignUpCredentials = {
    domain: string;
    name: string;
    type: string;

    first_name: string;
    last_name: string;
    second_name: string;
    phone: string;

    email: string;
    password: string;
}

export type IBaseSuccessResponse = {
    access_token: string;
    refresh_token: string;
}

export class BaseAuthorizationService implements IAuthorizationServiceInterface {
    private httpClient;
    private storage: Storage;

    private readonly _ACCESS_TOKEN_STORE_KEY = 'access_token';

    constructor() {
        this.httpClient = api({});
        this.storage = localStorage;
    }

    getToken(): string {
        return this.storage.getItem(this._ACCESS_TOKEN_STORE_KEY);
    }

    setToken(token: string) {
        this.storage.setItem(this._ACCESS_TOKEN_STORE_KEY, token);
    }

    SignIn(credentials) {
    }

    SignUp<C extends IBaseAuthorizationSignUpCredentials, R extends IBaseSuccessResponse>(credentials: C): Promise<R> {
        const url = '/register/';
        return this.httpClient.post(url, credentials);
    }

}
