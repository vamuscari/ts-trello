/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoardFields } from '../models/BoardFields';
import type { Checklist } from '../models/Checklist';
import type { posStringOrNumber } from '../models/posStringOrNumber';
import type { TrelloID } from '../models/TrelloID';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ChecklistsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a Checklist
     * @param idCard The ID of the Card that the checklist should be added to.
     * @param name The name of the checklist. Should be a string of length 1 to 16384.
     * @param pos The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
     * @param idChecklistSource The ID of a checklist to copy into the new checklist.
     * @returns any Success
     * @throws ApiError
     */
    public postChecklists(
        idCard: TrelloID,
        name?: string,
        pos?: posStringOrNumber,
        idChecklistSource?: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/checklists',
            query: {
                'idCard': idCard,
                'name': name,
                'pos': pos,
                'idChecklistSource': idChecklistSource,
            },
        });
    }

    /**
     * Get a Checklist
     * @param id ID of a checklist.
     * @param cards Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params available are documented at [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource).
     * @param checkItems The check items on the list to return. One of: `all`, `none`.
     * @param checkItemFields The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`
     * @param fields `all` or a comma-separated list of checklist [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getChecklistsId(
        id: TrelloID,
        cards: 'all' | 'closed' | 'none' | 'open' | 'visible' = 'none',
        checkItems: 'all' | 'none' = 'all',
        checkItemFields?: ('all' | Array<'name' | 'nameData' | 'pos' | 'state' | 'type' | 'due' | 'dueReminder' | 'idMember'>),
        fields?: ('all' | Array<Checklist>),
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/checklists/{id}',
            path: {
                'id': id,
            },
            query: {
                'cards': cards,
                'checkItems': checkItems,
                'checkItem_fields': checkItemFields,
                'fields': fields,
            },
        });
    }

    /**
     * Update a Checklist
     * Update an existing checklist.
     * @param id ID of a checklist.
     * @param name Name of the new checklist being created. Should be length of 1 to 16384.
     * @param pos Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
     * @returns any Success
     * @throws ApiError
     */
    public putCheclistsId(
        id: TrelloID,
        name?: string,
        pos?: posStringOrNumber,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/checklists/{id}',
            path: {
                'id': id,
            },
            query: {
                'name': name,
                'pos': pos,
            },
        });
    }

    /**
     * Delete a Checklist
     * Delete a checklist
     * @param id ID of a checklist.
     * @returns any Success
     * @throws ApiError
     */
    public deleteChecklistsId(
        id: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/checklists/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get field on a Checklist
     * @param id ID of a checklist.
     * @param field Field to update.
     * @returns any Success
     * @throws ApiError
     */
    public getChecklistsIdField(
        id: TrelloID,
        field: 'name' | 'pos',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/checklists/{id}/{field}',
            path: {
                'id': id,
                'field': field,
            },
        });
    }

    /**
     * Update field on a Checklist
     * @param id ID of a checklist.
     * @param field Field to update.
     * @param value The value to change the checklist name to. Should be a string of length 1 to 16384.
     * @returns any Success
     * @throws ApiError
     */
    public putChecklistsIdField(
        id: TrelloID,
        field: 'name' | 'pos',
        value: (posStringOrNumber | TrelloID),
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/checklists/{id}/{field}',
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
     * Get the Board the Checklist is on
     * @param id ID of a checklist.
     * @param fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getChecklistsIdBoard(
        id: TrelloID,
        fields?: ('all' | Array<BoardFields>),
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/checklists/{id}/board',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get the Card a Checklist is on
     * @param id ID of a checklist.
     * @returns any Success
     * @throws ApiError
     */
    public getChecklistsIdCards(
        id: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/checklists/{id}/cards',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get Checkitems on a Checklist
     * @param id ID of a checklist.
     * @param filter One of: `all`, `none`.
     * @param fields One of: `all`, `name`, `nameData`, `pos`, `state`,`type`, `due`, `dueReminder`, `idMember`.
     * @returns any Success
     * @throws ApiError
     */
    public getChecklistsIdCheckitems(
        id: TrelloID,
        filter: 'all' | 'none' = 'all',
        fields: 'all' | 'name' | 'nameData' | 'pos' | 'state' | 'type' | 'due' | 'dueReminder' | 'idMember' = 'name, nameData, pos, state, due, dueReminder, idMember',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/checklists/{id}/checkItems',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
                'fields': fields,
            },
        });
    }

    /**
     * Create Checkitem on Checklist
     * @param id ID of a checklist.
     * @param name The name of the new check item on the checklist. Should be a string of length 1 to 16384.
     * @param pos The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number.
     * @param checked Determines whether the check item is already checked when created.
     * @param due A due date for the checkitem
     * @param dueReminder A dueReminder for the due date on the checkitem
     * @param idMember An ID of a member resource.
     * @returns any Success
     * @throws ApiError
     */
    public postChecklistsIdCheckitems(
        id: TrelloID,
        name: string,
        pos: posStringOrNumber = 'bottom',
        checked: boolean = false,
        due?: string,
        dueReminder?: number | null,
        idMember?: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/checklists/{id}/checkItems',
            path: {
                'id': id,
            },
            query: {
                'name': name,
                'pos': pos,
                'checked': checked,
                'due': due,
                'dueReminder': dueReminder,
                'idMember': idMember,
            },
        });
    }

    /**
     * Get a Checkitem on a Checklist
     * @param id ID of a checklist.
     * @param idCheckItem ID of the check item to retrieve.
     * @param fields One of: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`,.
     * @returns any Success
     * @throws ApiError
     */
    public getChecklistsIdCheckitemsIdcheckitem(
        id: TrelloID,
        idCheckItem: TrelloID,
        fields: 'all' | 'name' | 'nameData' | 'pos' | 'state' | 'type' | 'due' | 'dueReminder' | 'idMember' = 'name, nameData, pos, state, due, dueReminder, idMember',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/checklists/{id}/checkItems/{idCheckItem}',
            path: {
                'id': id,
                'idCheckItem': idCheckItem,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Delete Checkitem from Checklist
     * Remove an item from a checklist
     * @param id ID of a checklist.
     * @param idCheckItem ID of the check item to retrieve.
     * @returns any Success
     * @throws ApiError
     */
    public deleteChecklistsIdCheckitemsIdcheckitem(
        id: TrelloID,
        idCheckItem: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/checklists/{id}/checkItems/{idCheckItem}',
            path: {
                'id': id,
                'idCheckItem': idCheckItem,
            },
        });
    }

}
