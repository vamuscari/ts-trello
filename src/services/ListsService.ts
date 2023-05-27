/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoardFields } from '../models/BoardFields';
import type { Card } from '../models/Card';
import type { TrelloID } from '../models/TrelloID';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ListsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a List
     * Get information about a List
     * @returns any Success
     * @throws ApiError
     */
    public getListsId({
        id,
        fields = 'name,closed,idBoard,pos',
    }: {
        /**
         * The ID of the list
         */
        id: string,
        /**
         * `all` or a comma separated list of List field names.
         */
        fields?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lists/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Update a List
     * Update the properties of a List
     * @returns any Success
     * @throws ApiError
     */
    public putListsId({
        id,
        name,
        closed,
        idBoard,
        pos,
        subscribed,
    }: {
        /**
         * The ID of the list
         */
        id: string,
        /**
         * New name for the list
         */
        name?: string,
        /**
         * Whether the list should be closed (archived)
         */
        closed?: boolean,
        /**
         * ID of a board the list should be moved to
         */
        idBoard?: TrelloID,
        /**
         * New position for the list: `top`, `bottom`, or a positive floating point number
         */
        pos?: (number | 'top' | 'bottom'),
        /**
         * Whether the active member is subscribed to this list
         */
        subscribed?: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/lists/{id}',
            path: {
                'id': id,
            },
            query: {
                'name': name,
                'closed': closed,
                'idBoard': idBoard,
                'pos': pos,
                'subscribed': subscribed,
            },
        });
    }

    /**
     * Create a new List
     * Create a new List on a Board
     * @returns any Success
     * @throws ApiError
     */
    public postLists({
        name,
        idBoard,
        idListSource,
        pos,
    }: {
        /**
         * Name for the list
         */
        name: string,
        /**
         * The long ID of the board the list should be created on
         */
        idBoard: TrelloID,
        /**
         * ID of the List to copy into the new List
         */
        idListSource?: TrelloID,
        /**
         * Position of the list. `top`, `bottom`, or a positive floating point number
         */
        pos?: (number | 'top' | 'bottom'),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/lists',
            query: {
                'name': name,
                'idBoard': idBoard,
                'idListSource': idListSource,
                'pos': pos,
            },
        });
    }

    /**
     * Archive all Cards in List
     * Archive all cards in a list
     * @returns any Success
     * @throws ApiError
     */
    public postListsIdArchiveallcards({
        id,
    }: {
        /**
         * The ID of the list
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/lists/{id}/archiveAllCards',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Move all Cards in List
     * Move all Cards in a List
     * @returns any Success
     * @throws ApiError
     */
    public postListsIdMoveallcards({
        id,
        idBoard,
        idList,
    }: {
        /**
         * The ID of the list
         */
        id: TrelloID,
        /**
         * The ID of the board the cards should be moved to
         */
        idBoard: TrelloID,
        /**
         * The ID of the list that the cards should be moved to
         */
        idList: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/lists/{id}/moveAllCards',
            path: {
                'id': id,
            },
            query: {
                'idBoard': idBoard,
                'idList': idList,
            },
        });
    }

    /**
     * Archive or unarchive a list
     * Archive or unarchive a list
     * @returns any Success
     * @throws ApiError
     */
    public putListsIdClosed({
        id,
        value,
    }: {
        /**
         * The ID of the list
         */
        id: TrelloID,
        /**
         * Set to true to close (archive) the list
         */
        value?: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/lists/{id}/closed',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Move List to Board
     * Move a List to a different Board
     * @returns any Success
     * @throws ApiError
     */
    public putIdIdboard({
        id,
        value,
    }: {
        /**
         * The ID of the list
         */
        id: TrelloID,
        /**
         * The ID of the board to move the list to
         */
        value: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/lists/{id}/idBoard',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Update a field on a List
     * Rename a list
     * @returns any Success
     * @throws ApiError
     */
    public putListsIdField({
        id,
        field,
        value,
    }: {
        /**
         * The ID of the list
         */
        id: TrelloID,
        /**
         * The field on the List to be updated
         */
        field: 'name' | 'pos' | 'subscribed',
        /**
         * The new value for the field
         */
        value?: (string | number | 'top' | 'bottom' | boolean),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/lists/{id}/{field}',
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
     * Get Actions for a List
     * Get the Actions on a List
     * @returns any Success
     * @throws ApiError
     */
    public getListsIdActions({
        id,
        filter,
    }: {
        /**
         * The ID of the list
         */
        id: string,
        /**
         * A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
         */
        filter?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lists/{id}/actions',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * Get the Board a List is on
     * Get the board a list is on
     * @returns any Success
     * @throws ApiError
     */
    public getListsIdBoard({
        id,
        fields,
    }: {
        /**
         * The ID of the list
         */
        id: string,
        /**
         * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)
         */
        fields?: ('all' | Array<BoardFields>),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lists/{id}/board',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get Cards in a List
     * List the cards in a list
     * @returns Card Success
     * @throws ApiError
     */
    public getListsIdCards({
        id,
    }: {
        /**
         * The ID of the list
         */
        id: TrelloID,
    }): CancelablePromise<Array<Card>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lists/{id}/cards',
            path: {
                'id': id,
            },
        });
    }

}
