"use strict";
/**
 * SilentAuthenticationHandler
 *
 * @class SilentAuthenticationHandler
 */
Object.defineProperty(exports, "__esModule", { value: true });
var iframeHandler_1 = require("./iframeHandler");
var SilentAuthenticationHandler = (function () {
    function SilentAuthenticationHandler(options) {
        this.authenticationUrl = options.authenticationUrl;
        this.timeout = options.timeout || 60 * 1000;
        this.handler = null;
    }
    SilentAuthenticationHandler.create = function (options) {
        return new SilentAuthenticationHandler(options);
    };
    ;
    SilentAuthenticationHandler.prototype.login = function (usePostMessage, callback) {
        this.handler = new iframeHandler_1.default({
            // auth0: this.auth0,
            url: this.authenticationUrl,
            eventListenerType: usePostMessage ? 'message' : 'load',
            callback: this.getCallbackHandler(callback, usePostMessage),
            timeout: this.timeout,
            eventValidator: this.getEventValidator(),
            timeoutCallback: function () {
                callback(null, '#error=timeout&error_description=Timeout+during+authentication+renew.');
            },
            usePostMessage: usePostMessage || false
        });
        this.handler.init();
    };
    ;
    SilentAuthenticationHandler.prototype.getEventValidator = function () {
        return {};
    };
    ;
    SilentAuthenticationHandler.prototype.getCallbackHandler = function (callback, usePostMessage) {
        return function (eventData) {
            var callbackValue;
            if (!usePostMessage) {
                // loadイベントの場合は、iframeウィンドウのフラグメントをコールバックへ渡す
                callbackValue = eventData.sourceObject.contentWindow.location.hash;
            }
            else if (typeof eventData.event.data === 'object' && eventData.event.data.hash) {
                callbackValue = eventData.event.data.hash;
            }
            else {
                callbackValue = eventData.event.data;
            }
            callback(null, callbackValue);
        };
    };
    ;
    return SilentAuthenticationHandler;
}());
exports.default = SilentAuthenticationHandler;
