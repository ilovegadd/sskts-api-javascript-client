import { Service } from '../service';
export declare type ISearchMovieTheatersConditions = any;
export declare type ISearchMovieTheaterResult = any;
export declare type IPlace = any;
export default class PlaceService extends Service {
    /**
     * 劇場検索
     */
    searchMovieTheaters(args: {
        /**
         * 検索条件
         */
        searchConditions?: ISearchMovieTheatersConditions;
    }): Promise<ISearchMovieTheaterResult[]>;
    /**
     * 劇場情報取得
     */
    findMovieTheater(args: {
        /**
         * 枝番号
         */
        branchCode: string;
    }): Promise<IPlace | null>;
}
