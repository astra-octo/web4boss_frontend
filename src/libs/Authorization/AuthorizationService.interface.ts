export interface IAuthorizationServiceInterface {
    getToken(): string;
    setToken(token: string);

    singUp(credentials): Promise<any>;
    singIn(credentials);
}
