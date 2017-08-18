"use strict";
/**
 * SilentLogoutHandler
 *
 * @class SilentLogoutHandler
 */
Object.defineProperty(exports, "__esModule", { value: true });
var iframeHandler_1 = require("./iframeHandler");
var SilentLogoutHandler = (function () {
    function SilentLogoutHandler(options) {
        this.logoutUrl = options.logoutUrl;
        this.timeout = options.timeout || 60 * 1000;
        this.handler = null;
    }
    SilentLogoutHandler.create = function (options) {
        return new SilentLogoutHandler(options);
    };
    ;
    SilentLogoutHandler.prototype.login = function (usePostMessage, callback) {
        this.handler = new iframeHandler_1.default({
            url: this.logoutUrl,
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
    SilentLogoutHandler.prototype.getEventValidator = function () {
        return {};
    };
    ;
    SilentLogoutHandler.prototype.getCallbackHandler = function (callback, usePostMessage) {
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
    return SilentLogoutHandler;
}());
exports.default = SilentLogoutHandler;
