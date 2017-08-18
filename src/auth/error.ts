export interface IError {
    error: string;
    errorDescription: string;
    state: string;
}

export function buildResponse(error: string, description: string): IError {
    return {
        error: error,
        errorDescription: description,
        state: ''
    };
}

export function invalidJwt(description: string): IError {
    return buildResponse('invalid_token', description);
}
