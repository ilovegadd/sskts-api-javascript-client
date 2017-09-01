export interface IOptions {
    logoutUrl: string;
    timeout?: number;
}
/**
 * SilentLogoutHandler
 * @class SilentLogoutHandler
 */
export default class SilentLogoutHandler {
    logoutUrl: string;
    timeout: number;
    handler: any;
    constructor(options: IOptions);
    static GET_CALLBACK_HANDLER(cb: () => void, usePostMessage: boolean): (eventData: any) => void;
    static CREATE(options: IOptions): SilentLogoutHandler;
    static GET_EVENT_VALIDATOR(): {};
    logout(usePostMessage: boolean): Promise<void>;
}
