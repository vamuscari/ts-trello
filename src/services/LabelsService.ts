/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Color } from '../models/Color';
import type { TrelloID } from '../models/TrelloID';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LabelsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a Label
     * Get information about a single Label.
     * @returns any Success
     * @throws ApiError
     */
    public getLabelsId({
        id,
        fields = 'all',
    }: {
        /**
         * The ID of the Label
         */
        id: TrelloID,
        /**
         * all or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/labels/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Update a Label
     * Update a label by ID.
     * @returns any Success
     * @throws ApiError
     */
    public putLabelsId({
        id,
        name,
        color,
    }: {
        /**
         * The ID of the Label
         */
        id: TrelloID,
        /**
         * The new name for the label
         */
        name?: string,
        /**
         * The new color for the label. See: [fields](/cloud/trello/guides/rest-api/object-definitions/) for color options
         */
        color?: Color,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/labels/{id}',
            path: {
                'id': id,
            },
            query: {
                'name': name,
                'color': color,
            },
        });
    }

    /**
     * Delete a Label
     * Delete a label by ID.
     * @returns any Success
     * @throws ApiError
     */
    public deleteLabelsId({
        id,
    }: {
        /**
         * The ID of the Label
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/labels/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a field on a label
     * Update a field on a label.
     * @returns any Success
     * @throws ApiError
     */
    public putLabelsIdField({
        id,
        field,
        value,
    }: {
        /**
         * The id of the label
         */
        id: string,
        /**
         * The field on the Label to update.
         */
        field: 'color' | 'name',
        /**
         * The new value for the field.
         */
        value: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/labels/{id}/{field}',
            path: {
                'id': id,
                'field': field,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Create a Label
     * Create a new Label on a Board.
     * @returns any Success
     * @throws ApiError
     */
    public postLabels({
        name,
        color,
        idBoard,
    }: {
        /**
         * Name for the label
         */
        name: string,
        /**
         * The color for the label.
         */
        color: Color,
        /**
         * The ID of the Board to create the Label on.
         */
        idBoard: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/labels',
            query: {
                'name': name,
                'color': color,
                'idBoard': idBoard,
            },
        });
    }

}
