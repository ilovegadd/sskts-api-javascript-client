/**
 * PopupAuthenticationHandler
 *
 * @class PopupAuthenticationHandler
 */
export default class PopupAuthenticationHandler {
    url: string;
    callback: any;
    timeout: any;
    timeoutCallback: any;
    eventListenerType: any;
    popupWindow: any;
    timeoutHandle: any;
    _destroyTimeout: any;
    proxyEventListener: any;
    eventValidator: any;
    eventSourceObject: any;
    constructor(options: any);
    init(): void;
    eventListener(event: any): void;
    timeoutHandler(): void;
    destroy(): void;
}
