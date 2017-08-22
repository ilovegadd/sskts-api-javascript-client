import * as factory from '@motionpicture/sskts-factory';
import { Service } from '../service';
export declare type ISearchMovieTheatersConditions = any;
/**
 * place service
 *
 * @class PlaceService
 */
export declare class PlaceService extends Service {
    /**
     * 劇場検索
     */
    searchMovieTheaters(
        /**
         * 検索条件
         */
        params?: ISearchMovieTheatersConditions): Promise<factory.place.movieTheater.IPlace[]>;
    /**
     * 劇場情報取得
     */
    findMovieTheater(params: {
        /**
         * 枝番号
         */
        branchCode: string;
    }): Promise<factory.place.movieTheater.IPlace | null>;
}
