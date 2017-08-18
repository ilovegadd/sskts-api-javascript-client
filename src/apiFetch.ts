/**
 * API fetch module
 */

import * as qs from 'qs';
import { DefaultTransporter } from './transporters';

export interface IOptions extends RequestInit {
    baseUrl: string;
    uri: string;
    qs?: any;
    expectedStatusCodes: number[];
}

/**
 * Create and send request to API
 */
function apiFetch(options: IOptions) {
    const expectedStatusCodes = options.expectedStatusCodes;
    delete options.expectedStatusCodes;

    const defaultOptions = {
        headers: {},
        method: 'GET',
        qs: {}
    };
    options = { ...defaultOptions, ...options };

    const url = `${options.baseUrl}${options.uri}?${qs.stringify(options.qs)}`;

    const headers = {
        ...{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        ...options.headers
    }

    const fetchOptions = {
        method: options.method,
        headers: headers
    }

    return (new DefaultTransporter(expectedStatusCodes)).fetch(url, fetchOptions);
}

export default apiFetch;
