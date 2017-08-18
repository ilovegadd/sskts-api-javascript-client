/**
 * PopupAuthenticationHandler
 * 
 * @class PopupAuthenticationHandler
 */

export default class PopupAuthenticationHandler {
    public url: string;
    public callback: any;
    public timeout: any;
    public timeoutCallback: any;
    public eventListenerType: any;
    public popupWindow: any;
    public timeoutHandle: any;
    public _destroyTimeout: any;
    public proxyEventListener: any;
    // If no event identifier specified, set default
    public eventValidator: any;
    public eventSourceObject: any;

    constructor(options: any) {
        this.url = options.url;
        this.callback = options.callback;
        this.timeout = options.timeout || 60 * 1000;
        this.timeoutCallback = options.timeoutCallback || null;
        this.eventListenerType = options.eventListenerType || 'message';
        this.popupWindow = null;
        this.timeoutHandle = null;
        this._destroyTimeout = null;
        this.proxyEventListener = null;
        // If no event identifier specified, set default
        this.eventValidator = options.eventValidator || {
            isValid: function () {
                return true;
            }
        };

        if (typeof this.callback !== 'function') {
            throw new Error('options.callback must be a function');
        }
    }

    public init() {
        console.log('opening popup...', this.eventListenerType);

        this.popupWindow = window.open(this.url, 'authorizeWindow');

        // Workaround to avoid using bind that does not work in IE8
        this.proxyEventListener = (e: any) => {
            this.eventListener(e);
        };

        switch (this.eventListenerType) {
            case 'message':
                this.eventSourceObject = window;
                break;
            case 'load':
                this.eventSourceObject = this.popupWindow;
                break;
            default:
                throw new Error('Unsupported event listener type: ' + this.eventListenerType);
        }

        console.log('this.eventSourceObject:', this.eventSourceObject);
        this.eventSourceObject.addEventListener(this.eventListenerType, this.proxyEventListener, false);

        this.timeoutHandle = setTimeout(() => {
            this.timeoutHandler();
        }, this.timeout);
    };

    eventListener(event: any) {
        console.log('PopupHandler.eventListener...event:', event);
        var eventData = { event: event, sourceObject: this.eventSourceObject };

        this.destroy();
        // 呼び出し元へコールバック
        this.callback(eventData);
    };

    timeoutHandler() {
        if (this.timeoutCallback) {
            this.timeoutCallback();
        }
    };

    destroy() {
        clearTimeout(this.timeoutHandle);

        this._destroyTimeout = setTimeout(() => {
            this.eventSourceObject.removeEventListener(
                this.eventListenerType,
                this.proxyEventListener,
                false
            );

            // ポップアップを閉じる
            this.popupWindow.close();
        }, 0);
    };
}
