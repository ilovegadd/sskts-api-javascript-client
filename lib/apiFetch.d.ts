export interface IOptions extends RequestInit {
    baseUrl: string;
    uri: string;
    qs?: any;
    expectedStatusCodes: number[];
}
/**
 * Create and send request to API
 */
declare function apiFetch(options: IOptions): Promise<any>;
export default apiFetch;
