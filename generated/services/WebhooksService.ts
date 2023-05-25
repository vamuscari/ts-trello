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
     * @param callbackUrl A valid URL that is reachable with a `HEAD` and `POST` request.
     * @param idModel ID of the model to be monitored
     * @param description A string with a length from `0` to `16384`.
     * @param active Determines whether the webhook is active and sending `POST` requests.
     * @returns Webhook Success
     * @throws ApiError
     */
    public postWebhooks(
        callbackUrl: string,
        idModel: TrelloID,
        description?: string,
        active?: boolean,
    ): CancelablePromise<Webhook> {
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
     * @param id ID of the webhook to retrieve.
     * @returns Webhook Success
     * @throws ApiError
     */
    public getWebhooksId(
        id: TrelloID,
    ): CancelablePromise<Webhook> {
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
     * @param id ID of the webhook to retrieve.
     * @param description A string with a length from `0` to `16384`.
     * @param callbackUrl A valid URL that is reachable with a `HEAD` and `POST` request.
     * @param idModel ID of the model to be monitored
     * @param active Determines whether the webhook is active and sending `POST` requests.
     * @returns Webhook Success
     * @throws ApiError
     */
    public putWebhooksId(
        id: TrelloID,
        description?: string,
        callbackUrl?: string,
        idModel?: TrelloID,
        active?: boolean,
    ): CancelablePromise<Webhook> {
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
     * @param id ID of the webhook to retrieve.
     * @returns any Success
     * @throws ApiError
     */
    public deleteWebhooksId(
        id: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id ID of the webhook.
     * @param field Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel`
     * @returns any Success
     * @throws ApiError
     */
    public webhooksidfield(
        id: TrelloID,
        field: 'active' | 'callbackURL' | 'description' | 'idModel' | 'consecutiveFailures' | 'firstConsecutiveFailDate',
    ): CancelablePromise<any> {
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
