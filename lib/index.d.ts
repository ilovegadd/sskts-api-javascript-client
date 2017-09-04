/**
 * Sasaki API client for javascript
 *
 * @ignore
 */
import * as service from '@motionpicture/sasaki-api-service';
import * as factory from '@motionpicture/sskts-factory';
import { ImplicitGrantClient, IOptions as IImplicitGrantClientOptions } from './auth/implicitGrantClient';
/**
 * factory
 * All object interfaces are here.
 * 全てのオブジェクトのインターフェースはここに含まれます。
 * @export
 */
export import factory = factory;
export import service = service;
export declare type IImplicitGrantClient = ImplicitGrantClient;
/**
 * create OAuth2 client instance using implicit grant
 * @param options implicit grant configurations
 */
export declare function createAuthInstance(options: IImplicitGrantClientOptions): ImplicitGrantClient;
