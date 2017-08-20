import { Service } from '../service';
export declare type IMovieTheater = any;
export default class OrganizationService extends Service {
    /**
     * 劇場組織検索
     */
    searchMovieTheaters(args: {
        /**
         * 検索条件
         */
        searchConditions?: {};
    }): Promise<IMovieTheater[]>;
    /**
     * 枝番号で劇場組織検索
     */
    findMovieTheaterByBranchCode(args: {
        /**
         * 枝番号
         */
        branchCode: string;
    }): Promise<IMovieTheater | null>;
}
