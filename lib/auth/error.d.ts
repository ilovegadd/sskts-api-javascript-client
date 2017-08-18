export interface IError {
    error: string;
    errorDescription: string;
    state: string;
}
export declare function buildResponse(error: string, description: string): IError;
export declare function invalidJwt(description: string): IError;
