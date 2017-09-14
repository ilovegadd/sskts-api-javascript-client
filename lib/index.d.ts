/**
 * Sasaki API client for javascript
 *
 * @ignore
 */
import * as sasaki from '@motionpicture/sasaki-api-abstract';
import { ImplicitGrantClient, IOptions as IImplicitGrantClientOptions } from './auth/implicitGrantClient';
/**
 * factory
 * All object interfaces are here.
 * 全てのオブジェクトのインターフェースはここに含まれます。
 * @export
 */
export import factory = sasaki.factory;
export import service = sasaki.service;
export import transporters = sasaki.transporters;
export declare type IImplicitGrantClient = ImplicitGrantClient;
/**
 * create OAuth2 client instance using implicit grant
 * @param options implicit grant configurations
 */
export declare function createAuthInstance(options: IImplicitGrantClientOptions): ImplicitGrantClient;
