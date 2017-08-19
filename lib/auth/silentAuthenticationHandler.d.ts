export interface IOptions {
    authenticationUrl: string;
    timeout?: number;
}
export default class SilentAuthenticationHandler {
    authenticationUrl: string;
    timeout: number;
    handler: any;
    constructor(options: IOptions);
    static create(options: IOptions): SilentAuthenticationHandler;
    login(usePostMessage: boolean): Promise<(hash: any) => void>;
    getEventValidator(): {};
    getCallbackHandler(cb: (hash: any) => void, usePostMessage: boolean): (eventData: any) => void;
}
