/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Member } from '../models/Member';
import type { MemberFields } from '../models/MemberFields';
import type { Token } from '../models/Token';
import type { TokenFields } from '../models/TokenFields';
import type { TrelloID } from '../models/TrelloID';
import type { Webhook } from '../models/Webhook';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TokensService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a Token
     * Retrieve information about a token.
     * @param token
     * @param fields `all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions`
     * @param webhooks Determines whether to include webhooks.
     * @returns Token Success
     * @throws ApiError
     */
    public getTokensToken(
        token: string,
        fields?: ('all' | Array<TokenFields>),
        webhooks: boolean = false,
    ): CancelablePromise<Token> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tokens/{token}',
            path: {
                'token': token,
            },
            query: {
                'fields': fields,
                'webhooks': webhooks,
            },
        });
    }

    /**
     * Get Token's Member
     * Retrieve information about a token's owner by token.
     * @param token
     * @param fields `all` or a comma-separated list of valid fields for [Member Object](/cloud/trello/guides/rest-api/object-definitions/).
     * @returns Member Success
     * @throws ApiError
     */
    public getTokensTokenMember(
        token: string,
        fields?: ('all' | Array<MemberFields>),
    ): CancelablePromise<Member> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tokens/{token}/member',
            path: {
                'token': token,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get Webhooks for Token
     * Retrieve all webhooks created with a Token.
     * @param token
     * @returns Webhook Success
     * @throws ApiError
     */
    public getTokensTokenWebhooks(
        token: string,
    ): CancelablePromise<Array<Webhook>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tokens/{token}/webhooks',
            path: {
                'token': token,
            },
        });
    }

    /**
     * Create Webhooks for Token
     * Create a new webhook for a Token.
     * @param token
     * @param callbackUrl The URL that the webhook should POST information to.
     * @param idModel ID of the object to create a webhook on.
     * @param description A description to be displayed when retrieving information about the webhook.
     * @returns Webhook Success
     * @throws ApiError
     */
    public postTokensTokenWebhooks(
        token: string,
        callbackUrl: string,
        idModel: TrelloID,
        description?: string,
    ): CancelablePromise<Webhook> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tokens/{token}/webhooks',
            path: {
                'token': token,
            },
            query: {
                'description': description,
                'callbackURL': callbackUrl,
                'idModel': idModel,
            },
        });
    }

    /**
     * Get a Webhook belonging to a Token
     * Retrieve a webhook created with a Token.
     * @param token
     * @param idWebhook ID of the [Webhooks](ref:webhooks) to retrieve.
     * @returns Webhook Success
     * @throws ApiError
     */
    public getTokensTokenWebhooksIdwebhook(
        token: string,
        idWebhook: TrelloID,
    ): CancelablePromise<Webhook> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tokens/{token}/webhooks/{idWebhook}',
            path: {
                'token': token,
                'idWebhook': idWebhook,
            },
        });
    }

    /**
     * Delete a Webhook created by Token
     * Delete a webhook created with given token.
     * @param token
     * @param idWebhook ID of the [Webhooks](ref:webhooks) to retrieve.
     * @returns any Success
     * @throws ApiError
     */
    public deleteTokensTokenWebhooksIdwebhook(
        token: string,
        idWebhook: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/tokens/{token}/webhooks/{idWebhook}',
            path: {
                'token': token,
                'idWebhook': idWebhook,
            },
        });
    }

    /**
     * Update a Webhook created by Token
     * Update a Webhook created by Token
     * @param token
     * @param idWebhook ID of the [Webhooks](ref:webhooks) to retrieve.
     * @param description A description to be displayed when retrieving information about the webhook.
     * @param callbackUrl The URL that the webhook should `POST` information to.
     * @param idModel ID of the object that the webhook is on.
     * @returns any Success
     * @throws ApiError
     */
    public tokenstokenwebhooks1(
        token: string,
        idWebhook: TrelloID,
        description?: string,
        callbackUrl?: string,
        idModel?: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/tokens/{token}/webhooks/{idWebhook}',
            path: {
                'token': token,
                'idWebhook': idWebhook,
            },
            query: {
                'description': description,
                'callbackURL': callbackUrl,
                'idModel': idModel,
            },
        });
    }

    /**
     * Delete a Token
     * Delete a token.
     * @param token
     * @returns any Success
     * @throws ApiError
     */
    public deleteToken(
        token: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/tokens/{token}/',
            path: {
                'token': token,
            },
        });
    }

}
