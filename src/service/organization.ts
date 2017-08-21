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
    async  searchMovieTheaters(
        /**
         * 検索条件
         */
        params?: {}
    ): Promise<IMovieTheater[]> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: '/organizations/movieTheater',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        });
    }

    /**
     * 枝番号で劇場組織検索
     */
    async  findMovieTheaterByBranchCode(params: {
        /**
         * 枝番号
         */
        branchCode: string;
    }): Promise<IMovieTheater | null> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/organizations/movieTheater/${params.branchCode}`,
            method: 'GET',
            qs: {},
            expectedStatusCodes: [NOT_FOUND, OK]
        });
    }
}
