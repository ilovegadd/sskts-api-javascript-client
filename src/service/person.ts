/**
 * 人物サービス
 *
 * @namespace service.person
 */

import apiFetch from '../apiFetch';
import { CREATED, OK } from 'http-status';

import { Service } from '../service';


export interface IPresavedCreditCardRaw {
    cardNo: string;
    cardPass?: string;
    expire: string;
    holderName: string;
}
export interface IPresavedCreditCardTokenized {
    token: string;
}
export type ISearchCardResult = any;
export default class PersonService extends Service {
    /**
     * クレジットカード検索
     */
    async  findCreditCards(args: {
        /**
         * 人物ID
         * ログイン中の人物の場合、'me'を指定してください。
         */
        personId: string;
    }): Promise<ISearchCardResult[]> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: `/people/${args.personId}/creditCards`,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            qs: {},
            expectedStatusCodes: [OK]
        };

        return apiFetch(options);
    }

    /**
     * クレジットカード追加
     */
    async addCreditCard(args: {
        /**
         * 人物ID
         * ログイン中の人物の場合、'me'を指定してください。
         */
        personId: string;
        /**
         * クレジットカード情報
         */
        creditCard: IPresavedCreditCardRaw | IPresavedCreditCardTokenized
    }): Promise<ISearchCardResult> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: `/people/${args.personId}/creditCards`,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            qs: {},
            body: args.creditCard,
            expectedStatusCodes: [CREATED]
        };

        return apiFetch(options);
    }
}
