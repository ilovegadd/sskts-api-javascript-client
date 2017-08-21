import { Service } from '../service';
export interface ISearchIndividualScreeningEventsConditions {
    day: string;
    theater: string;
}
/**
 * event service
 *
 * @class EventService
 */
export declare class EventService extends Service {
    /**
     * 上映イベント検索
     */
    searchIndividualScreeningEvent(
        /**
         * 検索条件
         */
        params: ISearchIndividualScreeningEventsConditions): Promise<any[]>;
    /**
     * 上映イベント情報取得
     * 存在しなければnullを返します。
     */
    findIndividualScreeningEvent(params: {
        /**
         * イベント識別子
         */
        identifier: string;
    }): Promise<any | null>;
}
