import { Service } from '../service';
export interface ISearchIndividualScreeningEventsConditions {
    day?: string;
    theater?: string;
}
export default class EventService extends Service {
    /**
     * 上映イベント検索
     */
    searchIndividualScreeningEvent(args: {
        /**
         * 検索条件
         */
        searchConditions: ISearchIndividualScreeningEventsConditions;
    }): Promise<any[]>;
}
