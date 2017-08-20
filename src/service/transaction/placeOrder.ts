/**
 * 注文取引サービス
 *
 * @namespace service.transaction.placeOrder
 */

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

export default class EventService extends Service {
    /**
     * 取引を開始する
     * 開始できない場合(混雑中など)、nullが返されます。
     */
    async start(args: {
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
        const options = {
            baseUrl: this.options.endpoint,
            uri: '/transactions/placeOrder/start',
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            body: {
                expires: args.expires.valueOf(),
                sellerId: args.sellerId
            },
            expectedStatusCodes: [NOT_FOUND, OK]
        };

        return apiFetch(options);
    }

    /**
     * 取引に座席予約を追加する
     */
    async createSeatReservationAuthorization(args: {
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
        const options = {
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${args.transactionId}/seatReservationAuthorization`,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            body: {
                eventIdentifier: args.eventIdentifier,
                offers: args.offers
            },
            expectedStatusCodes: [CREATED]
        };

        return apiFetch(options);
    }

    /**
     * 座席予約取消
     */
    async cancelSeatReservationAuthorization(args: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * 承認ID
         */
        authorizationId: string;
    }): Promise<void> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${args.transactionId}/seatReservationAuthorization/${args.authorizationId}`,
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            expectedStatusCodes: [NO_CONTENT]
        };

        return apiFetch(options);
    }

    /**
     * クレジットカードのオーソリを取得する
     */
    async createCreditCardAuthorization(args: {
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
        const options = {
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${args.transactionId}/paymentInfos/creditCard`,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            body: {
                orderId: args.orderId,
                amount: args.amount,
                method: args.method,
                creditCard: args.creditCard
            },
            expectedStatusCodes: [CREATED]
        };

        return apiFetch(options);
    }

    /**
     * クレジットカードオーソリ取消
     */
    async cancelCreditCardAuthorization(args: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * 承認ID
         */
        authorizationId: string;
    }): Promise<void> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${args.transactionId}/paymentInfos/creditCard/${args.authorizationId}`,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            expectedStatusCodes: [NO_CONTENT]
        };

        return apiFetch(options);
    }


    /**
     * 決済方法として、ムビチケを追加する
     */
    async createMvtkAuthorization(args: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * ムビチケ情報
         */
        mvtk: IMvtk;
    }): Promise<IMvtkAuthorization> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${args.transactionId}/paymentInfos/mvtk`,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            body: args.mvtk,
            expectedStatusCodes: [CREATED]
        };

        return apiFetch(options);
    }

    /**
     * ムビチケ取消
     */
    async cancelMvtkAuthorization(args: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * 承認ID
         */
        authorizationId: string;
    }): Promise<void> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${args.transactionId}/paymentInfos/mvtk/${args.authorizationId}`,
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            expectedStatusCodes: [NO_CONTENT]
        };

        return apiFetch(options);
    }

    /**
     * 購入者情報登録
     */
    async setAgentProfile(args: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * 購入者情報
         */
        profile: IProfile;
    }): Promise<void> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${args.transactionId}/agent/profile`,
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            body: args.profile,
            expectedStatusCodes: [NO_CONTENT]
        };

        return apiFetch(options);
    }

    /**
     * 取引確定
     */
    async confirm(args: {
        /**
         * 取引ID
         */
        transactionId: string;
    }): Promise<IOrder> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${args.transactionId}/confirm`,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            expectedStatusCodes: [CREATED]
        };

        return apiFetch(options);
    }


    /**
     * 確定した取引に関して、購入者にメール通知を送信する
     */
    async sendEmailNotification(args: {
        /**
         * 取引ID
         */
        transactionId: string;
        /**
         * Eメール通知
         */
        emailNotification: IEmailNotification
    }): Promise<void> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: `/transactions/placeOrder/${args.transactionId}/tasks/sendEmailNotification`,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            body: args.emailNotification,
            expectedStatusCodes: [NO_CONTENT]
        };

        return apiFetch(options);
    }
}
