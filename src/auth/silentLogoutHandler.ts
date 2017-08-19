/**
 * SilentLogoutHandler
 * 
 * @class SilentLogoutHandler
 */

import IframeHandler from './iframeHandler';
import * as ErrorFactory from './error';

export interface IOptions {
    logoutUrl: string;
    timeout?: number;
}

export default class SilentLogoutHandler {
    public logoutUrl: string;
    public timeout: number;
    public handler: any;

    constructor(options: IOptions) {
        this.logoutUrl = options.logoutUrl;
        this.timeout = options.timeout || 60 * 1000;
        this.handler = null;
    }

    static create(options: IOptions) {
        return new SilentLogoutHandler(options);
    };

    logout(usePostMessage: boolean) {
        return new Promise<void>((resolve, reject) => {
            this.handler = new IframeHandler({
                url: this.logoutUrl,
                eventListenerType: usePostMessage ? 'message' : 'load',
                callback: this.getCallbackHandler(resolve, usePostMessage),
                timeout: this.timeout,
                eventValidator: this.getEventValidator(),
                timeoutCallback: () => {
                    const err = new ErrorFactory.AuthorizeError('Timeout during logout');
                    err.error = 'timeout';
                    err.errorDescription = 'Timeout during logout';
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

    getCallbackHandler(cb: () => void, usePostMessage: boolean) {
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

            cb();
        };
    };
}
