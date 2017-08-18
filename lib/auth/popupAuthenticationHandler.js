"use strict";
/**
 * PopupAuthenticationHandler
 *
 * @class PopupAuthenticationHandler
 */
Object.defineProperty(exports, "__esModule", { value: true });
var popupHandler_1 = require("./popupHandler");
var PopupAuthenticationHandler = (function () {
    function PopupAuthenticationHandler(options) {
        this.authenticationUrl = options.authenticationUrl;
        this.timeout = options.timeout || 60 * 1000;
        this.handler = null;
    }
    PopupAuthenticationHandler.create = function (options) {
        return new PopupAuthenticationHandler(options);
    };
    ;
    PopupAuthenticationHandler.prototype.login = function (usePostMessage, callback) {
        this.handler = new popupHandler_1.default({
            // auth0: this.auth0,
            url: this.authenticationUrl,
            eventListenerType: usePostMessage ? 'message' : 'load',
            callback: this.getCallbackHandler(callback, usePostMessage),
            timeout: this.timeout,
            eventValidator: this.getEventValidator(),
            timeoutCallback: function () {
                callback(null, '#error=timeout&error_description=Timeout+during+authentication+renew.');
            },
            usePostMessage: false
        });
        this.handler.init();
    };
    ;
    PopupAuthenticationHandler.prototype.getEventValidator = function () {
        return {};
    };
    ;
    PopupAuthenticationHandler.prototype.getCallbackHandler = function (callback, usePostMessage) {
        return function (eventData) {
            var callbackValue;
            if (!usePostMessage) {
                // loadイベントの場合は、ポップアップのフラグメントをコールバックへ渡す
                callbackValue = eventData.sourceObject.location.hash;
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
    return PopupAuthenticationHandler;
}());
exports.default = PopupAuthenticationHandler;
