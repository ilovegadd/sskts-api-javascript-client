import ICredentials from './credentials';
export interface IBaseOption {
    domain: string;
    clientId: string;
    redirectUri: string;
    logoutUri: string;
    responseType: string;
    responseMode?: string;
    scope: string;
    state: string;
    nonce: string | null;
    audience?: string;
    tokenIssuer: string;
}
export default class ImplicitGrantClient {
    private baseOptions;
    static AUTHORIZE_URL: string;
    static LOGOUT_URL: string;
    credentials: ICredentials;
    constructor(options: IBaseOption);
    isSignedIn(): Promise<ICredentials | null>;
    getAccessToken(): Promise<string>;
    refreshAccessToken(): Promise<void>;
    /**
     * Executes a silent authentication transaction under the hood in order to fetch a new tokens for the current session.
     */
    refreshToken(): Promise<ICredentials>;
    /**
     * Redirects to the hosted login page (`/authorize`) in order to start a new authN/authZ transaction.
     */
    authorize(): Promise<ICredentials>;
    private onLogin(err, hash);
    /**
     * Redirects to the auth0 logout endpoint
     */
    logout(): Promise<ICredentials>;
    private parseHash(options);
    private buildParseHashResponse(qsParams, __, idTokenPayload);
    /**
     * Decodes the a JWT and verifies its nonce value
     */
    validateToken(token: string, nonce: string | null): Promise<any>;
    private buildAuthorizeUrl(options);
    /**
     * Builds and returns the Logout url in order to initialize a new authN/authZ transaction
     *
     * If you want to navigate the user to a specific URL after the logout, set that URL at the returnTo parameter. The URL should be included in any the appropriate Allowed Logout URLs list:
     */
    private buildLogoutUrl(options);
}
