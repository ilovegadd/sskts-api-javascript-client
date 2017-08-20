import { Service } from '../service';
export declare type IOrderInquiryKey = any;
export declare type IOrder = any;
export default class OrderService extends Service {
    /**
     * 照会キーで注文情報を取得する
     * 存在しなければnullを返します。
     */
    findByOrderInquiryKey(args: {
        /**
         * 注文照会キー
         */
        orderInquiryKey: IOrderInquiryKey;
    }): Promise<IOrder | null>;
}
