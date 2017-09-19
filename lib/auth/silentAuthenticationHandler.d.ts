export interface IOptions {
    authenticationUrl: string;
    timeout?: number;
}
/**
 * SilentAuthenticationHandler
 * @class SilentAuthenticationHandler
 */
export default class SilentAuthenticationHandler {
    authenticationUrl: string;
    timeout: number;
    handler: any;
    constructor(options: IOptions);
    static GET_EVENT_VALIDATOR(): {};
    static GET_CALLBACK_HANDLER(cb: (hash: any) => void, usePostMessage: boolean): (eventData: any) => void;
    static CREATE(options: IOptions): SilentAuthenticationHandler;
    login(usePostMessage: boolean): Promise<(hash: any) => void>;
}
