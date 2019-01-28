/**
 * API client for javascript
 */
import * as cinerino from '@cinerino/api-javascript-client';
import * as sasaki from '@motionpicture/sskts-api-abstract-client';

/**
 * factory
 */
export import factory = sasaki.factory;
export import service = sasaki.service;
export import transporters = sasaki.transporters;

export import IImplicitGrantClient = cinerino.IImplicitGrantClient;

/**
 * create OAuth2 client instance using implicit grant
 * @param options implicit grant configurations
 */
export import createAuthInstance = cinerino.createAuthInstance;
