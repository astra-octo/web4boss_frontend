export interface IAuthorizationServiceInterface {
    getToken(): string;
    setToken(token: string);

    SignUp(credentials): Promise<any>;
    SignIn(credentials);
}
