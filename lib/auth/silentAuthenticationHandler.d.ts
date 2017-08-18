export default class SilentAuthenticationHandler {
    authenticationUrl: any;
    timeout: any;
    handler: any;
    constructor(options: any);
    static create(options: any): SilentAuthenticationHandler;
    login(usePostMessage: boolean, callback: any): void;
    getEventValidator(): {};
    getCallbackHandler(callback: any, usePostMessage: boolean): (eventData: any) => void;
}
