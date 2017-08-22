import * as factory from '@motionpicture/sskts-factory';
import apiFetch from '../apiFetch';
import { NOT_FOUND, OK } from 'http-status';

import { Service } from '../service';

/**
 * place service
 *
 * @class PlaceService
 */
export class PlaceService extends Service {
    /**
     * 劇場検索
     */
    async searchMovieTheaters(
        /**
         * 検索条件
         */
        params?: {}
    ): Promise<factory.place.movieTheater.IPlaceWithoutScreeningRoom[]> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: '/places/movieTheater',
            method: 'GET',
            qs: params,
            expectedStatusCodes: [OK]
        });
    }

    /**
     * 劇場情報取得
     */
    async findMovieTheater(params: {
        /**
         * 枝番号
         */
        branchCode: string;
    }): Promise<factory.place.movieTheater.IPlace | null> {
        return apiFetch({
            auth: this.options.auth,
            baseUrl: this.options.endpoint,
            uri: `/places/movieTheater/${params.branchCode}`,
            method: 'GET',
            qs: {},
            expectedStatusCodes: [NOT_FOUND, OK]
        });
    }
}
