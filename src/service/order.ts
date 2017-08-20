/**
 * 注文サービス
 *
 * @namespace service.order
 */

import apiFetch from '../apiFetch';
import { NOT_FOUND, OK } from 'http-status';

import { Service } from '../service';

export type IOrderInquiryKey = any;
export type IOrder = any;
export default class OrderService extends Service {
    /**
     * 照会キーで注文情報を取得する
     * 存在しなければnullを返します。
     */
    async findByOrderInquiryKey(args: {
        /**
         * 注文照会キー
         */
        orderInquiryKey: IOrderInquiryKey;
    }): Promise<IOrder | null> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: '/orders/findByOrderInquiryKey',
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            qs: {},
            body: args.orderInquiryKey,
            expectedStatusCodes: [NOT_FOUND, OK]
        };

        return apiFetch(options);
    }
}
