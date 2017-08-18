export default class PopupAuthenticationHandler {
    authenticationUrl: any;
    timeout: any;
    handler: any;
    constructor(options: any);
    static create(options: any): PopupAuthenticationHandler;
    login(usePostMessage: boolean, callback: any): void;
    getEventValidator(): {};
    getCallbackHandler(callback: any, usePostMessage: boolean): (eventData: any) => void;
}
