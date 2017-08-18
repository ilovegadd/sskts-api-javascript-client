/**
 * OAuth認証情報
 */
interface ICredentials {
    /**
     * リフレッシュトークン
     */
    refreshToken?: string;
    /**
     * 期限UNIXタイムスタンプ
     */
    expiryDate?: number;
    /**
     * アクセストークン
     */
    accessToken?: string;
    /**
     * トークンタイプ
     */
    tokenType?: string;
    idToken?: string;
    idTokenPayload?: any;
    state?: string;
    expiresIn?: number;
    scope?: string;
}

export default ICredentials;
