export interface IOptions {
    logoutUrl: string;
    timeout?: number;
}
export default class SilentLogoutHandler {
    logoutUrl: string;
    timeout: number;
    handler: any;
    constructor(options: IOptions);
    static create(options: IOptions): SilentLogoutHandler;
    logout(usePostMessage: boolean): Promise<void>;
    getEventValidator(): {};
    getCallbackHandler(cb: () => void, usePostMessage: boolean): (eventData: any) => void;
}
