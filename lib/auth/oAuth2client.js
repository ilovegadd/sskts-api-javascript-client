"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var createDebug = require("debug");
var httpStatus = require("http-status");
var fetch = require("isomorphic-fetch");
var transporters_1 = require("../transporters");
var debug = createDebug('sasaki-api:auth:oAuth2client');
/**
 * OAuth2 client
 * @class
 */
var OAuth2client = /** @class */ (function () {
    function OAuth2client(options) {
        this.options = options;
        this.credentials = {};
    }
    /**
     * OAuthクライアントに認証情報をセットします。
     */
    OAuth2client.prototype.setCredentials = function (credentials) {
        this.credentials = credentials;
    };
    OAuth2client.prototype.refreshAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.credentials.refreshToken === undefined) {
                            throw new Error('No refresh token is set.');
                        }
                        return [4 /*yield*/, this.refreshToken(this.credentials.refreshToken)
                                .then(function (tokens) {
                                debug('setting credentials...', tokens);
                                _this.credentials = tokens;
                                return _this.credentials;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 期限の切れていないアクセストークンを取得します。
     * 必要であれば更新してから取得します。
     */
    OAuth2client.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var expiryDate, isTokenExpired, shouldRefresh, tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expiryDate = this.credentials.expiryDate;
                        isTokenExpired = (expiryDate !== undefined) ? (expiryDate <= (new Date()).getTime()) : false;
                        if (this.credentials.accessToken === undefined && this.credentials.refreshToken === undefined) {
                            throw new Error('No access or refresh token is set.');
                        }
                        shouldRefresh = (this.credentials.accessToken === undefined) || isTokenExpired;
                        if (!(shouldRefresh && this.credentials.refreshToken !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.refreshAccessToken()];
                    case 1:
                        tokens = _a.sent();
                        return [2 /*return*/, tokens.accessToken];
                    case 2: return [2 /*return*/, this.credentials.accessToken];
                }
            });
        });
    };
    /**
     * Provides a request implementation with OAuth 2.0 flow.
     * If credentials have a refresh_token, in cases of HTTP
     * 401 and 403 responses, it automatically asks for a new
     * access token and replays the unsuccessful request.
     * @param {request.OptionsWithUri} options Request options.
     * @return {Promise<any>}
     */
    OAuth2client.prototype.fetch = function (url, options, expectedStatusCodes) {
        return __awaiter(this, void 0, void 0, function () {
            var accessToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccessToken()];
                    case 1:
                        accessToken = _a.sent();
                        options.headers = (options.headers === undefined || options.headers === null) ? {} : options.headers;
                        options.headers.Authorization = "Bearer " + accessToken;
                        return [2 /*return*/, this.makeRequest(url, options, expectedStatusCodes)];
                }
            });
        });
    };
    /**
     * Refreshes the access token.
     */
    OAuth2client.prototype.refreshToken = function (refreshToken) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // request for new token
                        debug('refreshing access token...');
                        options = {
                            method: 'POST',
                            body: {
                                refresh_token: refreshToken,
                                client_id: this.options.clientId,
                                client_secret: this.options.clientSecret,
                                grant_type: 'refresh_token'
                            }
                        };
                        return [4 /*yield*/, fetch("https://" + this.options.domain + "/token", options)
                                .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                                var body, err, tokens;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(response.status !== httpStatus.OK)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, response.json()];
                                        case 1:
                                            body = _a.sent();
                                            if (typeof body === 'object' && body.errors !== undefined) {
                                                err = new transporters_1.RequestError(body.errors.map(function (error) { return error.title + ":" + error.detail; }).join('\n'));
                                                err.code = response.status;
                                                err.errors = body.errors;
                                            }
                                            throw new Error('An unexpected error occurred');
                                        case 2: return [4 /*yield*/, response.json()];
                                        case 3:
                                            tokens = _a.sent();
                                            if (tokens && tokens.expires_in) {
                                                // tslint:disable-next-line:no-magic-numbers
                                                tokens.expiry_date = ((new Date()).getTime() + (tokens.expires_in * 1000));
                                                delete tokens.expires_in;
                                            }
                                            return [2 /*return*/, tokens];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Makes a request without paying attention to refreshing or anything
     * Assumes that all credentials are set correctly.
     * @param  {object}   opts     Options for request
     * @param  {Function} callback callback function
     * @return {Request}           The request object created
     */
    // tslint:disable-next-line:prefer-function-over-method
    OAuth2client.prototype.makeRequest = function (url, options, expectedStatusCodes) {
        return __awaiter(this, void 0, void 0, function () {
            var transporter;
            return __generator(this, function (_a) {
                transporter = new transporters_1.DefaultTransporter(expectedStatusCodes);
                return [2 /*return*/, transporter.fetch(url, options)];
            });
        });
    };
    return OAuth2client;
}());
exports.default = OAuth2client;
