import ICredentials from './credentials';
import OAuth2client from './oAuth2client';
export interface IOptions {
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
/**
 * OAuth2 client using grant type 'implicit grant'
 *
 * @class ImplicitGrantClient
 */
export declare class ImplicitGrantClient extends OAuth2client {
    options: IOptions;
    static AUTHORIZE_URL: string;
    static LOGOUT_URL: string;
    credentials: ICredentials;
    constructor(options: IOptions);
    isSignedIn(): Promise<ICredentials | null>;
    getAccessToken(): Promise<string>;
    refreshAccessToken(): Promise<ICredentials>;
    /**
     * Executes a silent authentication transaction under the hood in order to fetch a new tokens for the current session.
     */
    refreshToken(): Promise<ICredentials>;
    /**
     * Redirects to the hosted login page (`/authorize`) in order to start a new authN/authZ transaction.
     */
    signIn(): Promise<ICredentials>;
    private onLogin(hash);
    /**
     * Redirects to the auth0 logout endpoint
     */
    signOut(): Promise<void>;
    private parseHash(hash?);
    private buildParseHashResponse(qsParams, __, idTokenPayload);
    /**
     * Decodes the a JWT and verifies its nonce value
     */
    private validateToken(token, nonce);
    private buildAuthorizeUrl(options);
    /**
     * Builds and returns the Logout url in order to initialize a new authN/authZ transaction
     *
     * If you want to navigate the user to a specific URL after the logout, set that URL at the returnTo parameter. The URL should be included in any the appropriate Allowed Logout URLs list:
     */
    private buildLogoutUrl(options);
}
