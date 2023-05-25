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
     * @param id The ID of the Label
     * @param fields all or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getLabelsId(
        id: TrelloID,
        fields: string = 'all',
    ): CancelablePromise<any> {
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
     * @param id The ID of the Label
     * @param name The new name for the label
     * @param color The new color for the label. See: [fields](/cloud/trello/guides/rest-api/object-definitions/) for color options
     * @returns any Success
     * @throws ApiError
     */
    public putLabelsId(
        id: TrelloID,
        name?: string,
        color?: Color,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Label
     * @returns any Success
     * @throws ApiError
     */
    public deleteLabelsId(
        id: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The id of the label
     * @param field The field on the Label to update.
     * @param value The new value for the field.
     * @returns any Success
     * @throws ApiError
     */
    public putLabelsIdField(
        id: string,
        field: 'color' | 'name',
        value: TrelloID,
    ): CancelablePromise<any> {
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
     * @param name Name for the label
     * @param color The color for the label.
     * @param idBoard The ID of the Board to create the Label on.
     * @returns any Success
     * @throws ApiError
     */
    public postLabels(
        name: string,
        color: Color,
        idBoard: string,
    ): CancelablePromise<any> {
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
