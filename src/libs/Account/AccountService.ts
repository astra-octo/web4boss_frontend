import Api$ from '../api';
import {Account} from "../../store/states/types";

export class AccountService {
    private readonly _httpClient = Api$({});

    private static _instance: AccountService;

    static init(args?:null) {
        if (!AccountService._instance) {
            AccountService._instance = new AccountService();
        }

        return AccountService._instance;
    }

    loadAccount(): Promise<Account> {
        const url = '/user/profile/';
        return this._httpClient.get<Account>(url).then(data => data.data);
    }
}
