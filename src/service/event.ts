/**
 * イベントサービス
 *
 * @namespace service.event
 */

import apiFetch from '../apiFetch';
import { OK } from 'http-status';

import { Service } from '../service';

export interface ISearchIndividualScreeningEventsConditions {
    day: string;
    theater: string;
}

export default class EventService extends Service {
    /**
     * 上映イベント検索
     */
    async searchIndividualScreeningEvent(
        /**
         * 検索条件
         */
        params: ISearchIndividualScreeningEventsConditions
    ): Promise<any[]> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: '/events/individualScreeningEvent',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        });
    }
}
