export interface IOptions {
    authenticationUrl: string;
    timeout?: number;
}
export default class PopupAuthenticationHandler {
    authenticationUrl: string;
    timeout: number;
    handler: any;
    constructor(options: IOptions);
    static create(options: IOptions): PopupAuthenticationHandler;
    login(usePostMessage: boolean): Promise<(hash: any) => void>;
    getEventValidator(): {};
    getCallbackHandler(cb: (hash: any) => void, usePostMessage: boolean): (eventData: any) => void;
}
