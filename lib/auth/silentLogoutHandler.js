"use strict";
/**
 * SilentLogoutHandler
 *
 * @class SilentLogoutHandler
 */
Object.defineProperty(exports, "__esModule", { value: true });
var iframeHandler_1 = require("./iframeHandler");
var ErrorFactory = require("./error");
var SilentLogoutHandler = /** @class */ (function () {
    function SilentLogoutHandler(options) {
        this.logoutUrl = options.logoutUrl;
        this.timeout = options.timeout || 60 * 1000;
        this.handler = null;
    }
    SilentLogoutHandler.create = function (options) {
        return new SilentLogoutHandler(options);
    };
    ;
    SilentLogoutHandler.prototype.logout = function (usePostMessage) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.handler = new iframeHandler_1.default({
                url: _this.logoutUrl,
                eventListenerType: usePostMessage ? 'message' : 'load',
                callback: _this.getCallbackHandler(resolve, usePostMessage),
                timeout: _this.timeout,
                eventValidator: _this.getEventValidator(),
                timeoutCallback: function () {
                    var err = new ErrorFactory.AuthorizeError('Timeout during logout');
                    err.error = 'timeout';
                    err.errorDescription = 'Timeout during logout';
                    reject(err);
                },
                usePostMessage: usePostMessage || false
            });
            _this.handler.init();
        });
    };
    ;
    SilentLogoutHandler.prototype.getEventValidator = function () {
        return {};
    };
    ;
    SilentLogoutHandler.prototype.getCallbackHandler = function (cb, usePostMessage) {
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
            cb();
        };
    };
    ;
    return SilentLogoutHandler;
}());
exports.default = SilentLogoutHandler;
