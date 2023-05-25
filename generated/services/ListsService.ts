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
     * @param id The ID of the list
     * @param fields `all` or a comma separated list of List field names.
     * @returns any Success
     * @throws ApiError
     */
    public getListsId(
        id: string,
        fields: string = 'name,closed,idBoard,pos',
    ): CancelablePromise<any> {
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
     * @param id The ID of the list
     * @param name New name for the list
     * @param closed Whether the list should be closed (archived)
     * @param idBoard ID of a board the list should be moved to
     * @param pos New position for the list: `top`, `bottom`, or a positive floating point number
     * @param subscribed Whether the active member is subscribed to this list
     * @returns any Success
     * @throws ApiError
     */
    public putListsId(
        id: string,
        name?: string,
        closed?: boolean,
        idBoard?: TrelloID,
        pos?: (number | 'top' | 'bottom'),
        subscribed?: boolean,
    ): CancelablePromise<any> {
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
     * @param name Name for the list
     * @param idBoard The long ID of the board the list should be created on
     * @param idListSource ID of the List to copy into the new List
     * @param pos Position of the list. `top`, `bottom`, or a positive floating point number
     * @returns any Success
     * @throws ApiError
     */
    public postLists(
        name: string,
        idBoard: TrelloID,
        idListSource?: TrelloID,
        pos?: (number | 'top' | 'bottom'),
    ): CancelablePromise<any> {
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
     * @param id The ID of the list
     * @returns any Success
     * @throws ApiError
     */
    public postListsIdArchiveallcards(
        id: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the list
     * @param idBoard The ID of the board the cards should be moved to
     * @param idList The ID of the list that the cards should be moved to
     * @returns any Success
     * @throws ApiError
     */
    public postListsIdMoveallcards(
        id: TrelloID,
        idBoard: TrelloID,
        idList: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the list
     * @param value Set to true to close (archive) the list
     * @returns any Success
     * @throws ApiError
     */
    public putListsIdClosed(
        id: TrelloID,
        value?: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the list
     * @param value The ID of the board to move the list to
     * @returns any Success
     * @throws ApiError
     */
    public putIdIdboard(
        id: TrelloID,
        value: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the list
     * @param field The field on the List to be updated
     * @param value The new value for the field
     * @returns any Success
     * @throws ApiError
     */
    public putListsIdField(
        id: TrelloID,
        field: 'name' | 'pos' | 'subscribed',
        value?: (string | number | 'top' | 'bottom' | boolean),
    ): CancelablePromise<any> {
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
     * @param id The ID of the list
     * @param filter A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
     * @returns any Success
     * @throws ApiError
     */
    public getListsIdActions(
        id: string,
        filter?: string,
    ): CancelablePromise<any> {
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
     * @param id The ID of the list
     * @param fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)
     * @returns any Success
     * @throws ApiError
     */
    public getListsIdBoard(
        id: string,
        fields?: ('all' | Array<BoardFields>),
    ): CancelablePromise<any> {
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
     * @param id The ID of the list
     * @returns Card Success
     * @throws ApiError
     */
    public getListsIdCards(
        id: TrelloID,
    ): CancelablePromise<Array<Card>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lists/{id}/cards',
            path: {
                'id': id,
            },
        });
    }

}
