import apiFetch from '../../apiFetch';
import { CREATED, NO_CONTENT, NOT_FOUND, OK } from 'http-status';

import { Service } from '../../service';

export type IMvtk = any;

export interface IEmailNotification {
    // tslint:disable-next-line:no-reserved-keywords
    from: string;
    to: string;
    subject: string;
    content: string;
}

export type ITransaction = any;
export type ISeatReservationOffer = any;
export type ISeatReservationAuthorization = any;
export type ICreditCard4authorization = any;
export type IGMOAuthorization = any;
export type IMvtkAuthorization = any;
export type IProfile = any;
export type IOrder = any;

/**
 * placeOrder transaction service
 *
 * @class transaction/PlaceOrderService
 */
export default class PlaceOrderService extends Service {
    /**
     * 取引を開始する
     * 開始できない場合(混雑中など)、nullが返されます。
     */
    async start(params: {
        /**
         * 取引期限
         * 指定した日時を過ぎると、取引を進行することはできなくなります。
         */
        expires: Date;
        /**
         * 販売者ID
         */
        sellerId: string;
    }): Promise<ITransaction> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: '/transactions/placeOrder/start',
            method: 'POST',
            body: {
                expires: params.expires.valueOf(),
                sellerId: params.sellerId
            },
            expectedStatusCodes: [NOT_FOUND, OK]
        });
    }

    /**
     * 取引に座席予約を追加する
     */
    async createSeatReservationAuthorization(params: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * イベント識別子
         */
        eventIdentifier: string;
        /**
         * 座席販売情報
         */
        offers: ISeatReservationOffer[];
    }): Promise<ISeatReservationAuthorization> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${params.transactionId}/seatReservationAuthorization`,
            method: 'POST',
            body: {
                eventIdentifier: params.eventIdentifier,
                offers: params.offers
            },
            expectedStatusCodes: [CREATED]
        });
    }

    /**
     * 座席予約取消
     */
    async cancelSeatReservationAuthorization(params: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * 承認ID
         */
        authorizationId: string;
    }): Promise<void> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${params.transactionId}/seatReservationAuthorization/${params.authorizationId}`,
            method: 'DELETE',
            body: params,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * クレジットカードのオーソリを取得する
     */
    async createCreditCardAuthorization(params: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * オーダーID
         */
        orderId: string;
        /**
         * 金額
         */
        amount: number;
        /**
         * 支払い方法
         */
        method: string;
        /**
         * クレジットカード情報
         */
        creditCard: ICreditCard4authorization;
    }): Promise<IGMOAuthorization> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${params.transactionId}/paymentInfos/creditCard`,
            method: 'POST',
            body: {
                orderId: params.orderId,
                amount: params.amount,
                method: params.method,
                creditCard: params.creditCard
            },
            expectedStatusCodes: [CREATED]
        });
    }

    /**
     * クレジットカードオーソリ取消
     */
    async cancelCreditCardAuthorization(params: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * 承認ID
         */
        authorizationId: string;
    }): Promise<void> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${params.transactionId}/paymentInfos/creditCard/${params.authorizationId}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }


    /**
     * 決済方法として、ムビチケを追加する
     */
    async createMvtkAuthorization(params: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * ムビチケ情報
         */
        mvtk: IMvtk;
    }): Promise<IMvtkAuthorization> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${params.transactionId}/paymentInfos/mvtk`,
            method: 'POST',
            body: params.mvtk,
            expectedStatusCodes: [CREATED]
        });
    }

    /**
     * ムビチケ取消
     */
    async cancelMvtkAuthorization(params: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * 承認ID
         */
        authorizationId: string;
    }): Promise<void> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${params.transactionId}/paymentInfos/mvtk/${params.authorizationId}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 購入者情報登録
     */
    async setAgentProfile(params: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * 購入者情報
         */
        profile: IProfile;
    }): Promise<void> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${params.transactionId}/agent/profile`,
            method: 'POST',
            body: params.profile,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 取引確定
     */
    async confirm(params: {
        /**
         * 取引ID
         */
        transactionId: string;
    }): Promise<IOrder> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${params.transactionId}/confirm`,
            method: 'POST',
            expectedStatusCodes: [CREATED]
        });
    }


    /**
     * 確定した取引に関して、購入者にメール通知を送信する
     */
    async sendEmailNotification(params: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * Eメール通知
         */
        emailNotification: IEmailNotification
    }): Promise<void> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${params.transactionId}/tasks/sendEmailNotification`,
            method: 'POST',
            body: params.emailNotification,
            expectedStatusCodes: [NO_CONTENT]
        });
    }
}
