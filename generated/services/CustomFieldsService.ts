/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomField } from '../models/CustomField';
import type { posStringOrNumber } from '../models/posStringOrNumber';
import type { TrelloID } from '../models/TrelloID';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CustomFieldsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a new Custom Field on a Board
     * Create a new Custom Field on a board.
     * @param requestBody
     * @returns CustomField Success
     * @throws ApiError
     */
    public postCustomfields(
        requestBody?: {
            /**
             * The ID of the model for which the Custom Field is being defined. This should always be the ID of a board.
             */
            idModel: TrelloID;
            /**
             * The type of model that the Custom Field is being defined on. This should always be `board`.
             */
            modelType: 'board';
            /**
             * The name of the Custom Field
             */
            name: string;
            /**
             * The type of Custom Field to create.
             */
            type: 'checkbox' | 'list' | 'number' | 'text' | 'date';
            /**
             * If the type is `checkbox`
             */
            options?: string;
            pos: posStringOrNumber;
            /**
             * Whether this Custom Field should be shown on the front of Cards
             */
            display_cardFront?: boolean;
        },
    ): CancelablePromise<CustomField> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/customFields',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get a Custom Field
     * @param id ID of the Custom Field.
     * @returns CustomField Success
     * @throws ApiError
     */
    public getCustomfieldsId(
        id: TrelloID,
    ): CancelablePromise<CustomField> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customFields/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a Custom Field definition
     * Update a Custom Field definition.
     * @param id ID of the Custom Field.
     * @param requestBody
     * @returns CustomField Success
     * @throws ApiError
     */
    public putCustomfieldsId(
        id: TrelloID,
        requestBody?: {
            /**
             * The name of the Custom Field
             */
            name?: string;
            pos?: posStringOrNumber;
            /**
             * Whether to display this custom field on the front of cards
             */
            'display/cardFront'?: boolean;
        },
    ): CancelablePromise<CustomField> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/customFields/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a Custom Field definition
     * Delete a Custom Field from a board.
     * @param id ID of the Custom Field.
     * @returns any Success
     * @throws ApiError
     */
    public deleteCustomfieldsId(
        id: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/customFields/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Add Option to Custom Field dropdown
     * Add an option to a dropdown Custom Field
     * @param id ID of the customfield.
     * @returns any Success
     * @throws ApiError
     */
    public getCustomfieldsIdOptions(
        id: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/customFields/{id}/options',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get Options of Custom Field drop down
     * Get the options of a drop down Custom Field
     * @param id ID of the customfield.
     * @returns any Success
     * @throws ApiError
     */
    public postCustomfieldsIdOptions(
        id: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customFields/{id}/options',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get Option of Custom Field dropdown
     * Retrieve a specific, existing Option on a given dropdown-type Custom Field
     * @param id ID of the customfielditem.
     * @param idCustomFieldOption ID of the customfieldoption to retrieve.
     * @returns any Success
     * @throws ApiError
     */
    public getCustomfieldsOptionsIdcustomfieldoption(
        id: TrelloID,
        idCustomFieldOption: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customFields/{id}/options/{idCustomFieldOption}',
            path: {
                'id': id,
                'idCustomFieldOption': idCustomFieldOption,
            },
        });
    }

    /**
     * Delete Option of Custom Field dropdown
     * Delete an option from a Custom Field dropdown.
     * @param id ID of the customfielditem.
     * @param idCustomFieldOption ID of the customfieldoption to retrieve.
     * @returns any Success
     * @throws ApiError
     */
    public deleteCustomfieldsOptionsIdcustomfieldoption(
        id: TrelloID,
        idCustomFieldOption: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/customFields/{id}/options/{idCustomFieldOption}',
            path: {
                'id': id,
                'idCustomFieldOption': idCustomFieldOption,
            },
        });
    }

}
