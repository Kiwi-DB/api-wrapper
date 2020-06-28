interface KiwiOptions {
    url: string;
    apiToken: string;
}
interface ApiResponse {
    value?: string;
    status: number;
}
export default class KiwiDB {
    url: string;
    Authorization: string;
    constructor({ url, apiToken }: KiwiOptions);
    get(key: string): Promise<ApiResponse>;
    set(key: string, value: string): Promise<ApiResponse>;
    delete(key: string): Promise<ApiResponse>;
}
export {};
