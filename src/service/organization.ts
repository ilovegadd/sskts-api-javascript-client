/**
 * 組織サービス
 *
 * @namespace service.organization
 */

import apiFetch from '../apiFetch';
import { NOT_FOUND, OK } from 'http-status';

import { Service } from '../service';

export type IMovieTheater = any;
export default class OrganizationService extends Service {
    /**
     * 劇場組織検索
     */
    async  searchMovieTheaters(args: {
        /**
         * 検索条件
         */
        searchConditions?: {};
    }): Promise<IMovieTheater[]> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: '/organizations/movieTheater',
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
     * 枝番号で劇場組織検索
     */
    async  findMovieTheaterByBranchCode(args: {
        /**
         * 枝番号
         */
        branchCode: string;
    }): Promise<IMovieTheater | null> {
        const options = {
            baseUrl: this.options.endpoint,
            uri: `/organizations/movieTheater/${args.branchCode}`,
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
