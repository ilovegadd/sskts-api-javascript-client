"use strict";
/**
 * API fetch module
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var qs = require("qs");
var transporters_1 = require("./transporters");
/**
 * Create and send request to API
 */
function apiFetch(options) {
    var defaultOptions = {
        headers: {},
        method: 'GET',
        qs: {}
    };
    options = __assign({}, defaultOptions, options);
    var url = "" + options.baseUrl + options.uri + "?" + qs.stringify(options.qs);
    var headers = __assign({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }, options.headers);
    var fetchOptions = {
        method: options.method,
        headers: headers
    };
    // create request (using authClient or otherwise and return request obj)
    if (options.auth !== undefined) {
        return options.auth.fetch(url, options, options.expectedStatusCodes);
    }
    else {
        return (new transporters_1.DefaultTransporter(options.expectedStatusCodes)).fetch(url, fetchOptions);
    }
}
exports.default = apiFetch;
