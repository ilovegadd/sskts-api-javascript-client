/**
 * OAuth2 credentilas
 * 
 * @interface ICredentials
 */
interface ICredentials {
    refreshToken?: string;
    expiryDate?: number;
    expiresIn?: number;
    accessToken?: string;
    tokenType?: string;
    idToken?: string;
    idTokenPayload?: any;
    state?: string;
}

export default ICredentials;
