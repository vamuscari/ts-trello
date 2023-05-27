/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BatchService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Batch Requests
     * Make up to 10 GET requests in a single, batched API call.
     * @returns any Success
     * @throws ApiError
     */
    public getBatch({
        urls,
    }: {
        /**
         * A list of API routes. Maximum of 10 routes allowed. The routes should begin with a forward slash and should not include the API version number - e.g. "urls=/members/trello,/cards/[cardId]"
         */
        urls: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/batch',
            query: {
                'urls': urls,
            },
        });
    }

}
