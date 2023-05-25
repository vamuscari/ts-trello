/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ApplicationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Application's compliance data
     * @param key
     * @returns any Success
     * @throws ApiError
     */
    public applicationsKeyCompliance(
        key: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/applications/{key}/compliance',
            path: {
                'key': key,
            },
        });
    }

}
