import Api$ from '../api';
import {Organization} from "../../store/states/types";

export class CoreService {
    private readonly _httpClient = Api$({});

    private static _instance: CoreService;

    static init(args?:null) {
        if (!CoreService._instance) {
            CoreService._instance = new CoreService();
        }

        return CoreService._instance;
    }

    loadOrganization(): Promise<Organization> {
        const url = '/v2/organization/';
        return this._httpClient.get<Organization>(url).then(data => data.data);
    }
}
