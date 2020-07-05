import {IAuthorizationServiceInterface} from "../AuthorizationService.interface";

export type IBaseAuthorizationSingUpCredentials = {
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
    getToken(): string {
        return "";
    }

    setToken(token: string) {
    }

    singIn(credentials) {
    }

    singUp<C extends IBaseAuthorizationSingUpCredentials, R extends IBaseSuccessResponse>(credentials: C): Promise<R> {
        return Promise.resolve<IBaseSuccessResponse & any>({
            access_token: 'test',
            refresh_token: 'test2',
        });
    }

}
