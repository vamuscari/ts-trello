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
     * @returns any Success
     * @throws ApiError
     */
    public postChecklists({
        idCard,
        name,
        pos,
        idChecklistSource,
    }: {
        /**
         * The ID of the Card that the checklist should be added to.
         */
        idCard: TrelloID,
        /**
         * The name of the checklist. Should be a string of length 1 to 16384.
         */
        name?: string,
        /**
         * The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
         */
        pos?: posStringOrNumber,
        /**
         * The ID of a checklist to copy into the new checklist.
         */
        idChecklistSource?: TrelloID,
    }): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public getChecklistsId({
        id,
        cards = 'none',
        checkItems = 'all',
        checkItemFields,
        fields,
    }: {
        /**
         * ID of a checklist.
         */
        id: TrelloID,
        /**
         * Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params available are documented at [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource).
         */
        cards?: 'all' | 'closed' | 'none' | 'open' | 'visible',
        /**
         * The check items on the list to return. One of: `all`, `none`.
         */
        checkItems?: 'all' | 'none',
        /**
         * The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`
         */
        checkItemFields?: ('all' | Array<'name' | 'nameData' | 'pos' | 'state' | 'type' | 'due' | 'dueReminder' | 'idMember'>),
        /**
         * `all` or a comma-separated list of checklist [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<Checklist>),
    }): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public putCheclistsId({
        id,
        name,
        pos,
    }: {
        /**
         * ID of a checklist.
         */
        id: TrelloID,
        /**
         * Name of the new checklist being created. Should be length of 1 to 16384.
         */
        name?: string,
        /**
         * Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
         */
        pos?: posStringOrNumber,
    }): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public deleteChecklistsId({
        id,
    }: {
        /**
         * ID of a checklist.
         */
        id: TrelloID,
    }): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public getChecklistsIdField({
        id,
        field,
    }: {
        /**
         * ID of a checklist.
         */
        id: TrelloID,
        /**
         * Field to update.
         */
        field: 'name' | 'pos',
    }): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public putChecklistsIdField({
        id,
        field,
        value,
    }: {
        /**
         * ID of a checklist.
         */
        id: TrelloID,
        /**
         * Field to update.
         */
        field: 'name' | 'pos',
        /**
         * The value to change the checklist name to. Should be a string of length 1 to 16384.
         */
        value: (posStringOrNumber | TrelloID),
    }): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public getChecklistsIdBoard({
        id,
        fields,
    }: {
        /**
         * ID of a checklist.
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<BoardFields>),
    }): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public getChecklistsIdCards({
        id,
    }: {
        /**
         * ID of a checklist.
         */
        id: TrelloID,
    }): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public getChecklistsIdCheckitems({
        id,
        filter = 'all',
        fields = 'all',
    }: {
        /**
         * ID of a checklist.
         */
        id: TrelloID,
        /**
         * One of: `all`, `none`.
         */
        filter?: 'all' | 'none',
        /**
         * One of: `all`, `name`, `nameData`, `pos`, `state`,`type`, `due`, `dueReminder`, `idMember`.
         */
        fields?: 'all' | 'name' | 'nameData' | 'pos' | 'state' | 'type' | 'due' | 'dueReminder' | 'idMember',
    }): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public postChecklistsIdCheckitems({
        id,
        name,
        pos = 'bottom',
        checked = false,
        due,
        dueReminder,
        idMember,
    }: {
        /**
         * ID of a checklist.
         */
        id: TrelloID,
        /**
         * The name of the new check item on the checklist. Should be a string of length 1 to 16384.
         */
        name: string,
        /**
         * The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number.
         */
        pos?: posStringOrNumber,
        /**
         * Determines whether the check item is already checked when created.
         */
        checked?: boolean,
        /**
         * A due date for the checkitem
         */
        due?: string,
        /**
         * A dueReminder for the due date on the checkitem
         */
        dueReminder?: number | null,
        /**
         * An ID of a member resource.
         */
        idMember?: TrelloID,
    }): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public getChecklistsIdCheckitemsIdcheckitem({
        id,
        idCheckItem,
        fields = 'all',
    }: {
        /**
         * ID of a checklist.
         */
        id: TrelloID,
        /**
         * ID of the check item to retrieve.
         */
        idCheckItem: TrelloID,
        /**
         * One of: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`,.
         */
        fields?: 'all' | 'name' | 'nameData' | 'pos' | 'state' | 'type' | 'due' | 'dueReminder' | 'idMember',
    }): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public deleteChecklistsIdCheckitemsIdcheckitem({
        id,
        idCheckItem,
    }: {
        /**
         * ID of a checklist.
         */
        id: TrelloID,
        /**
         * ID of the check item to retrieve.
         */
        idCheckItem: TrelloID,
    }): CancelablePromise<any> {
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
