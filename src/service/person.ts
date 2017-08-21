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
    async  findCreditCards(params: {
        /**
         * 人物ID
         * ログイン中の人物の場合、'me'を指定してください。
         */
        personId: string;
    }): Promise<ISearchCardResult[]> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/people/${params.personId}/creditCards`,
            method: 'GET',
            qs: {},
            expectedStatusCodes: [OK]
        });
    }

    /**
     * クレジットカード追加
     */
    async addCreditCard(params: {
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
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/people/${params.personId}/creditCards`,
            method: 'POST',
            body: params.creditCard,
            expectedStatusCodes: [CREATED]
        });
    }
}
