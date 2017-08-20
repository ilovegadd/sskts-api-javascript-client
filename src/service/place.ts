/**
 * 場所サービス
 *
 * @namespace service.place
 */

import apiFetch from '../apiFetch';
import { NOT_FOUND, OK } from 'http-status';

import { Service } from '../service';

export type ISearchMovieTheatersConditions = any;
export type ISearchMovieTheaterResult = any;
export type IPlace = any;
export default class PlaceService extends Service {
    /**
     * 劇場検索
     */
    async  searchMovieTheaters(args: {
        /**
         * 検索条件
         */
        searchConditions?: ISearchMovieTheatersConditions;
    }): Promise<ISearchMovieTheaterResult[]> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: '/places/movieTheater',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            qs: args.searchConditions,
            expectedStatusCodes: [OK]
        };

        return apiFetch(options);
    }

    /**
     * 劇場情報取得
     */
    async  findMovieTheater(args: {
        /**
         * 枝番号
         */
        branchCode: string;
    }): Promise<IPlace | null> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: `/places/movieTheater/${args.branchCode}`,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${await this.options.auth.getAccessToken()}`
            },
            qs: {},
            expectedStatusCodes: [NOT_FOUND, OK]
        };

        return apiFetch(options);
    }
}
