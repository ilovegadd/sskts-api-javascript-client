import { Service } from '../service';
export declare type ISearchMovieTheatersConditions = any;
export declare type ISearchMovieTheaterResult = any;
export declare type IPlace = any;
/**
 * place service
 *
 * @class PlaceService
 */
export default class PlaceService extends Service {
    /**
     * 劇場検索
     */
    searchMovieTheaters(
        /**
         * 検索条件
         */
        params?: ISearchMovieTheatersConditions): Promise<ISearchMovieTheaterResult[]>;
    /**
     * 劇場情報取得
     */
    findMovieTheater(params: {
        /**
         * 枝番号
         */
        branchCode: string;
    }): Promise<IPlace | null>;
}
