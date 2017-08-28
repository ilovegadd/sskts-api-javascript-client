import * as factory from '@motionpicture/sskts-factory';
import apiFetch from '../../apiFetch';
import { CREATED, NO_CONTENT, NOT_FOUND, OK } from 'http-status';

import { Service } from '../../service';

export type ICreditCard =
    factory.paymentMethod.paymentCard.creditCard.IUncheckedCardRaw |
    factory.paymentMethod.paymentCard.creditCard.IUncheckedCardTokenized |
    factory.paymentMethod.paymentCard.creditCard.IUnauthorizedCardOfMember;

export interface IAuthorization {
    id: string;
    price: number;
}

/**
 * placeOrder transaction service
 *
 * @class transaction/PlaceOrderService
 */
export class PlaceOrderService extends Service {
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
    }): Promise<factory.transaction.placeOrder.ITransaction> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: '/transactions/placeOrder/start',
            method: 'POST',
            body: {
                // tslint:disable-next-line:no-magic-numbers
                expires: (params.expires.getTime() / 1000).toFixed(0), // unix timestamp
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
         * transaction ID
         */
        transactionId: string;
        /**
         * イベント識別子
         */
        eventIdentifier: string;
        /**
         * 座席販売情報
         */
        offers: factory.offer.ISeatReservationOffer[];
    }): Promise<factory.authorization.seatReservation.IAuthorization> {
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
         * transaction ID
         */
        transactionId: string;
        /**
         * authorization ID
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
         * transaction ID
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
        creditCard: ICreditCard;
    }): Promise<IAuthorization> {
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
         * transaction ID
         */
        transactionId: string;
        /**
         * authorization ID
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
         * transaction ID
         */
        transactionId: string;
        /**
         * ムビチケ情報
         */
        mvtk: factory.authorization.mvtk.IResult;
    }): Promise<IAuthorization> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${params.transactionId}/discountInfos/mvtk`,
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
         * transaction ID
         */
        transactionId: string;
        /**
         * authorization ID
         */
        authorizationId: string;
    }): Promise<void> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${params.transactionId}/discountInfos/mvtk/${params.authorizationId}`,
            method: 'DELETE',
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * register a customer contact
     */
    async setCustomerContact(params: {
        /**
         * transaction ID
         */
        transactionId: string;
        /**
         * customer contact info
         */
        contact: factory.transaction.placeOrder.ICustomerContact;
    }): Promise<void> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${params.transactionId}/customerContact`,
            method: 'PUT',
            body: params.contact,
            expectedStatusCodes: [NO_CONTENT]
        });
    }

    /**
     * 取引確定
     */
    async confirm(params: {
        /**
         * transaction ID
         */
        transactionId: string;
    }): Promise<factory.order.IOrder> {
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
         * transaction ID
         */
        transactionId: string;
        /**
         * Eメール通知
         */
        emailNotification: factory.notification.email.INotification
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
