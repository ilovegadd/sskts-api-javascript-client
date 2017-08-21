import { Service } from '../service';
export declare type IMovieTheater = any;
/**
 * organization service
 *
 * @class OrganizationService
 */
export declare class OrganizationService extends Service {
    /**
     * 劇場組織検索
     */
    searchMovieTheaters(
        /**
         * 検索条件
         */
        params?: {}): Promise<IMovieTheater[]>;
    /**
     * 枝番号で劇場組織検索
     */
    findMovieTheaterByBranchCode(params: {
        /**
         * 枝番号
         */
        branchCode: string;
    }): Promise<IMovieTheater | null>;
}
