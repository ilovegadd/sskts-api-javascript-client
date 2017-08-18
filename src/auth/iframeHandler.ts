/**
 * IframeHandler
 * 
 * @class IframeHandler
 */

export default class IframeHandler {
    public url: string;
    public callback: any;
    public timeout: any;
    public timeoutCallback: any;
    public eventListenerType: any;
    public iframe: any;
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
        this.iframe = null;
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

    init() {
        console.log('opening iframe...', this.eventListenerType);

        this.iframe = window.document.createElement('iframe');
        this.iframe.style.display = 'none';
        this.iframe.src = this.url;

        // Workaround to avoid using bind that does not work in IE8
        this.proxyEventListener = (e: any) => {
            this.eventListener(e);
        };

        switch (this.eventListenerType) {
            case 'message':
                this.eventSourceObject = window;
                break;
            case 'load':
                this.eventSourceObject = this.iframe;
                break;
            default:
                throw new Error('Unsupported event listener type: ' + this.eventListenerType);
        }

        this.eventSourceObject.addEventListener(this.eventListenerType, this.proxyEventListener, false);

        window.document.body.appendChild(this.iframe);

        this.timeoutHandle = setTimeout(() => {
            this.timeoutHandler();
        }, this.timeout);
    };

    eventListener(event: any) {
        var eventData = { event: event, sourceObject: this.eventSourceObject };

        this.destroy();
        this.callback(eventData);
    };

    timeoutHandler() {
        this.destroy();
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

            window.document.body.removeChild(this.iframe);
        }, 0);
    };
}
