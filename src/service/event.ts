/**
 * イベントサービス
 *
 * @namespace service.event
 */

import apiFetch from '../apiFetch';
import { OK } from 'http-status';

import { Service } from '../service';

export interface ISearchIndividualScreeningEventsConditions {
    day?: string;
    theater?: string;
}

export default class EventService extends Service {
    /**
     * 上映イベント検索
     */
    async searchIndividualScreeningEvent(args: {
        /**
         * 検索条件
         */
        searchConditions: ISearchIndividualScreeningEventsConditions
    }): Promise<any[]> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: '/events/individualScreeningEvent',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            qs: args.searchConditions,
            expectedStatusCodes: [OK]
        };

        return apiFetch(options);
    }
}
