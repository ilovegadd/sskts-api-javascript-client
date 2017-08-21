import { Service } from '../service';
export interface ISearchIndividualScreeningEventsConditions {
    day: string;
    theater: string;
}
export default class EventService extends Service {
    /**
     * 上映イベント検索
     */
    searchIndividualScreeningEvent(
        /**
         * 検索条件
         */
        params: ISearchIndividualScreeningEventsConditions): Promise<any[]>;
}
