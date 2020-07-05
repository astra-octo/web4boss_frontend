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

    constructor() {
        this.httpClient = api({});
    }

    getToken(): string {
        return "";
    }

    setToken(token: string) {
    }

    SignIn(credentials) {
    }

    SignUp<C extends IBaseAuthorizationSignUpCredentials, R extends IBaseSuccessResponse>(credentials: C): Promise<R> {
        const url = '/register/';

        return this.httpClient.post(url, credentials);
    }

}
