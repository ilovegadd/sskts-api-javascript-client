/**
 * authorize error
 */
export declare class AuthorizeError extends Error {
    error: string;
    errorDescription: string;
    state: string;
}
