/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrelloID } from '../models/TrelloID';
import type { Webhook } from '../models/Webhook';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WebhooksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a Webhook
     * Create a new webhook.
     * @returns Webhook Success
     * @throws ApiError
     */
    public postWebhooks({
        callbackUrl,
        idModel,
        description,
        active,
    }: {
        /**
         * A valid URL that is reachable with a `HEAD` and `POST` request.
         */
        callbackUrl: string,
        /**
         * ID of the model to be monitored
         */
        idModel: TrelloID,
        /**
         * A string with a length from `0` to `16384`.
         */
        description?: string,
        /**
         * Determines whether the webhook is active and sending `POST` requests.
         */
        active?: boolean,
    }): CancelablePromise<Webhook> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/webhooks/',
            query: {
                'description': description,
                'callbackURL': callbackUrl,
                'idModel': idModel,
                'active': active,
            },
        });
    }

    /**
     * Get a Webhook
     * Get a webhook by ID. You must use the token query parameter and pass in the token the webhook was created under, or else you will encounter a 'webhook does not belong to token' error.
     * @returns Webhook Success
     * @throws ApiError
     */
    public getWebhooksId({
        id,
    }: {
        /**
         * ID of the webhook to retrieve.
         */
        id: TrelloID,
    }): CancelablePromise<Webhook> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/webhooks/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a Webhook
     * Update a webhook by ID.
     * @returns Webhook Success
     * @throws ApiError
     */
    public putWebhooksId({
        id,
        description,
        callbackUrl,
        idModel,
        active,
    }: {
        /**
         * ID of the webhook to retrieve.
         */
        id: TrelloID,
        /**
         * A string with a length from `0` to `16384`.
         */
        description?: string,
        /**
         * A valid URL that is reachable with a `HEAD` and `POST` request.
         */
        callbackUrl?: string,
        /**
         * ID of the model to be monitored
         */
        idModel?: TrelloID,
        /**
         * Determines whether the webhook is active and sending `POST` requests.
         */
        active?: boolean,
    }): CancelablePromise<Webhook> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/webhooks/{id}',
            path: {
                'id': id,
            },
            query: {
                'description': description,
                'callbackURL': callbackUrl,
                'idModel': idModel,
                'active': active,
            },
        });
    }

    /**
     * Delete a Webhook
     * Delete a webhook by ID.
     * @returns any Success
     * @throws ApiError
     */
    public deleteWebhooksId({
        id,
    }: {
        /**
         * ID of the webhook to retrieve.
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/webhooks/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get a field on a Webhook
     * Get a field on a Webhook
     * @returns any Success
     * @throws ApiError
     */
    public webhooksidfield({
        id,
        field,
    }: {
        /**
         * ID of the webhook.
         */
        id: TrelloID,
        /**
         * Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel`
         */
        field: 'active' | 'callbackURL' | 'description' | 'idModel' | 'consecutiveFailures' | 'firstConsecutiveFailDate',
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/webhooks/{id}/{field}',
            path: {
                'id': id,
                'field': field,
            },
        });
    }

}
