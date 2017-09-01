export interface IOptions {
    authenticationUrl: string;
    timeout?: number;
}
/**
 * PopupAuthenticationHandler
 * @class PopupAuthenticationHandler
 */
export default class PopupAuthenticationHandler {
    authenticationUrl: string;
    timeout: number;
    handler: any;
    constructor(options: IOptions);
    static GET_EVENT_VALIDATOR(): {};
    static GET_CALLBACK_HANDLER(cb: (hash: any) => void, usePostMessage: boolean): (eventData: any) => void;
    static CREATE(options: IOptions): PopupAuthenticationHandler;
    login(usePostMessage: boolean): Promise<(hash: any) => void>;
}
