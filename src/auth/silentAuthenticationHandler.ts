/**
 * SilentAuthenticationHandler
 * 
 * @class SilentAuthenticationHandler
 */

import IframeHandler from './iframeHandler';
import * as ErrorFactory from './error';

export interface IOptions {
    authenticationUrl: string;
    timeout?: number;
}

export default class SilentAuthenticationHandler {
    public authenticationUrl: string;
    public timeout: number;
    public handler: any;

    constructor(options: IOptions) {
        this.authenticationUrl = options.authenticationUrl;
        this.timeout = options.timeout || 60 * 1000;
        this.handler = null;
    }

    static create(options: IOptions) {
        return new SilentAuthenticationHandler(options);
    };

    login(usePostMessage: boolean) {
        return new Promise<(hash: any) => void>((resolve, reject) => {
            this.handler = new IframeHandler({
                url: this.authenticationUrl,
                eventListenerType: usePostMessage ? 'message' : 'load',
                callback: this.getCallbackHandler(resolve, usePostMessage),
                timeout: this.timeout,
                eventValidator: this.getEventValidator(),
                timeoutCallback: () => {
                    const err = new ErrorFactory.AuthorizeError('Timeout during authentication renew');
                    err.error = 'timeout';
                    err.errorDescription = 'Timeout during authentication renew';
                    reject(err);
                },
                usePostMessage: usePostMessage || false
            });

            this.handler.init();
        });
    };

    getEventValidator() {
        return {
        };
    };

    getCallbackHandler(cb: (hash: any) => void, usePostMessage: boolean) {
        return (eventData: any) => {
            let callbackValue;
            if (!usePostMessage) {
                // loadイベントの場合は、iframeウィンドウのフラグメントをコールバックへ渡す
                callbackValue = eventData.sourceObject.contentWindow.location.hash;
            } else if (typeof eventData.event.data === 'object' && eventData.event.data.hash) {
                callbackValue = eventData.event.data.hash;
            } else {
                callbackValue = eventData.event.data;
            }

            cb(callbackValue);
        };
    };
}
