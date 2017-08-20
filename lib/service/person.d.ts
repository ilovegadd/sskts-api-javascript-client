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
export declare type ISearchCardResult = any;
export default class PersonService extends Service {
    /**
     * クレジットカード検索
     */
    findCreditCards(args: {
        /**
         * 人物ID
         * ログイン中の人物の場合、'me'を指定してください。
         */
        personId: string;
    }): Promise<ISearchCardResult[]>;
    /**
     * クレジットカード追加
     */
    addCreditCard(args: {
        /**
         * 人物ID
         * ログイン中の人物の場合、'me'を指定してください。
         */
        personId: string;
        /**
         * クレジットカード情報
         */
        creditCard: IPresavedCreditCardRaw | IPresavedCreditCardTokenized;
    }): Promise<ISearchCardResult>;
}
