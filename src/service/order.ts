import * as factory from '@motionpicture/sskts-factory';
import apiFetch from '../apiFetch';
import { NOT_FOUND, OK } from 'http-status';

import { Service } from '../service';

/**
 * order service
 *
 * @class OrderService
 */
export class OrderService extends Service {
    /**
     * 照会キーで注文情報を取得する
     * 存在しなければnullを返します。
     */
    async findByOrderInquiryKey(
        /**
         * 注文照会キー
         */
        params: factory.orderInquiryKey.IOrderInquiryKey
    ): Promise<factory.order.IOrder | null> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: '/orders/findByOrderInquiryKey',
            method: 'POST',
            body: params,
            expectedStatusCodes: [NOT_FOUND, OK]
        });
    }
}
