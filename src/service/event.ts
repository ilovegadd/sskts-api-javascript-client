/**
 * イベントサービス
 *
 * @namespace service.event
 */

import apiFetch from '../apiFetch';
import { NOT_FOUND, OK } from 'http-status';

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

    /**
     * 上映イベント情報取得
     * 存在しなければnullを返します。
     */
    public async findIndividualScreeningEvent(params: {
        /**
         * イベント識別子
         */
        identifier: string;
    }): Promise<any | null> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/events/individualScreeningEvent/${params.identifier}`,
            method: 'GET',
            expectedStatusCodes: [NOT_FOUND, OK]
        });
    }
}
