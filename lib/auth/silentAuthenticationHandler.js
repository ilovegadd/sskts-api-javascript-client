"use strict";
/**
 * SilentAuthenticationHandler
 *
 * @class SilentAuthenticationHandler
 */
Object.defineProperty(exports, "__esModule", { value: true });
var iframeHandler_1 = require("./iframeHandler");
var ErrorFactory = require("./error");
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
    SilentAuthenticationHandler.prototype.login = function (usePostMessage) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.handler = new iframeHandler_1.default({
                url: _this.authenticationUrl,
                eventListenerType: usePostMessage ? 'message' : 'load',
                callback: _this.getCallbackHandler(resolve, usePostMessage),
                timeout: _this.timeout,
                eventValidator: _this.getEventValidator(),
                timeoutCallback: function () {
                    var err = new ErrorFactory.AuthorizeError('Timeout during authentication renew');
                    err.error = 'timeout';
                    err.errorDescription = 'Timeout during authentication renew';
                    reject(err);
                },
                usePostMessage: usePostMessage || false
            });
            _this.handler.init();
        });
    };
    ;
    SilentAuthenticationHandler.prototype.getEventValidator = function () {
        return {};
    };
    ;
    SilentAuthenticationHandler.prototype.getCallbackHandler = function (cb, usePostMessage) {
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
            cb(callbackValue);
        };
    };
    ;
    return SilentAuthenticationHandler;
}());
exports.default = SilentAuthenticationHandler;
