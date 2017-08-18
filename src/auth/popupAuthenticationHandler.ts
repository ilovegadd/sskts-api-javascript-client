/**
 * PopupAuthenticationHandler
 * 
 * @class PopupAuthenticationHandler
 */

import PopupHandler from './popupHandler';

export default class PopupAuthenticationHandler {
    public authenticationUrl: any;
    public timeout: any;
    public handler: any;

    constructor(options: any) {
        this.authenticationUrl = options.authenticationUrl;
        this.timeout = options.timeout || 60 * 1000;
        this.handler = null;
    }

    static create(options: any) {
        return new PopupAuthenticationHandler(options);
    };

    login(usePostMessage: boolean, callback: any) {
        this.handler = new PopupHandler({
            // auth0: this.auth0,
            url: this.authenticationUrl,
            eventListenerType: usePostMessage ? 'message' : 'load',
            callback: this.getCallbackHandler(callback, usePostMessage),
            timeout: this.timeout,
            eventValidator: this.getEventValidator(),
            timeoutCallback: () => {
                callback(null, '#error=timeout&error_description=Timeout+during+authentication+renew.');
            },
            usePostMessage: false
        });

        this.handler.init();
    };

    getEventValidator() {
        return {
        };
    };

    getCallbackHandler(callback: any, usePostMessage: boolean) {
        return (eventData: any) => {
            let callbackValue;
            if (!usePostMessage) {
                // loadイベントの場合は、ポップアップのフラグメントをコールバックへ渡す
                callbackValue = eventData.sourceObject.location.hash;
            } else if (typeof eventData.event.data === 'object' && eventData.event.data.hash) {
                callbackValue = eventData.event.data.hash;
            } else {
                callbackValue = eventData.event.data;
            }
            callback(null, callbackValue);
        };
    };
}
