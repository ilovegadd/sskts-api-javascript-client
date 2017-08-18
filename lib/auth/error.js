"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildResponse(error, description) {
    return {
        error: error,
        errorDescription: description,
        state: ''
    };
}
exports.buildResponse = buildResponse;
function invalidJwt(description) {
    return buildResponse('invalid_token', description);
}
exports.invalidJwt = invalidJwt;
