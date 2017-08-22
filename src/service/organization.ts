import * as factory from '@motionpicture/sskts-factory';
import apiFetch from '../apiFetch';
import { NOT_FOUND, OK } from 'http-status';

import { Service } from '../service';

/**
 * organization service
 *
 * @class OrganizationService
 */
export class OrganizationService extends Service {
    /**
     * 劇場組織検索
     */
    searchMovieTheaters(
        /**
         * 検索条件
         */
        params?: {}
    ): Promise<factory.organization.movieTheater.IPublicFields[]> {
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
    async findMovieTheaterByBranchCode(params: {
        /**
         * 枝番号
         */
        branchCode: string;
    }): Promise<factory.organization.movieTheater.IPublicFields | null> {
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
