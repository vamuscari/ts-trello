/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Plugin } from '../models/Plugin';
import type { PluginListing } from '../models/PluginListing';
import type { TrelloID } from '../models/TrelloID';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PluginsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a Plugin
     * Get plugins
     * @param id The ID or name of the organization
     * @returns Plugin Success
     * @throws ApiError
     */
    public getPluginsId(
        id: TrelloID,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/plugins/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a Plugin
     * Update a Plugin
     * @param id The ID or name of the organization
     * @returns Plugin Success
     * @throws ApiError
     */
    public putPluginsId(
        id: TrelloID,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/plugins/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create a Listing for Plugin
     * Create a new listing for a given locale for your Power-Up
     * @param idPlugin The ID of the Power-Up for which you are creating a new listing.
     * @param requestBody
     * @returns PluginListing Success
     * @throws ApiError
     */
    public postPluginsIdpluginListing(
        idPlugin: TrelloID,
        requestBody?: {
            /**
             * The description to show for the given locale
             */
            description?: string;
            /**
             * The locale that this listing should be displayed for.
             */
            locale?: string;
            /**
             * The overview to show for the given locale.
             */
            overview?: string;
            /**
             * The name to use for the given locale.
             */
            name?: string;
        },
    ): CancelablePromise<PluginListing> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/plugins/{idPlugin}/listing',
            path: {
                'idPlugin': idPlugin,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Plugin's Member privacy compliance
     * @param id The ID of the Power-Up
     * @returns any Success
     * @throws ApiError
     */
    public getPluginsIdComplianceMemberprivacy(
        id: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/plugins/{id}/compliance/memberPrivacy',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Updating Plugin's Listing
     * Update an existing listing for your Power-Up
     * @param idPlugin The ID of the Power-Up whose listing is being updated.
     * @param idListing The ID of the existing listing for the Power-Up that is being updated.
     * @param requestBody
     * @returns PluginListing Success
     * @throws ApiError
     */
    public putPluginsIdpluginListingsIdlisting(
        idPlugin: TrelloID,
        idListing: TrelloID,
        requestBody?: {
            /**
             * The description to show for the given locale
             */
            description?: string;
            /**
             * The locale that this listing should be displayed for.
             */
            locale?: string;
            /**
             * The overview to show for the given locale.
             */
            overview?: string;
            /**
             * The name to use for the given locale.
             */
            name?: string;
        },
    ): CancelablePromise<PluginListing> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/plugins/{idPlugin}/listings/{idListing}',
            path: {
                'idPlugin': idPlugin,
                'idListing': idListing,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
