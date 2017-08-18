export default class SilentLogoutHandler {
    logoutUrl: any;
    timeout: any;
    handler: any;
    constructor(options: any);
    static create(options: any): SilentLogoutHandler;
    login(usePostMessage: boolean, callback: any): void;
    getEventValidator(): {};
    getCallbackHandler(callback: any, usePostMessage: boolean): (eventData: any) => void;
}
