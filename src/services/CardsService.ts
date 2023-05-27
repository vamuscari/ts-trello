/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Action } from '../models/Action';
import type { Attachment } from '../models/Attachment';
import type { AttachmentFields } from '../models/AttachmentFields';
import type { BoardFields } from '../models/BoardFields';
import type { Card } from '../models/Card';
import type { CardFields } from '../models/CardFields';
import type { CheckItem } from '../models/CheckItem';
import type { CustomFieldItems } from '../models/CustomFieldItems';
import type { CustomSticker } from '../models/CustomSticker';
import type { ListFields } from '../models/ListFields';
import type { MemberFields } from '../models/MemberFields';
import type { posStringOrNumber } from '../models/posStringOrNumber';
import type { TrelloID } from '../models/TrelloID';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CardsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a new Card
     * Create a new card
     * @returns Card Success
     * @throws ApiError
     */
    public postCards({
        idList,
        name,
        desc,
        pos,
        due,
        start,
        dueComplete,
        idMembers,
        idLabels,
        urlSource,
        fileSource,
        mimeType,
        idCardSource,
        keepFromSource,
        address,
        locationName,
        coordinates,
    }: {
        /**
         * The ID of the list the card should be created in
         */
        idList: TrelloID,
        /**
         * The name for the card
         */
        name?: string,
        /**
         * The description for the card
         */
        desc?: string,
        /**
         * The position of the new card. `top`, `bottom`, or a positive float
         */
        pos?: ('top' | 'bottom' | number),
        /**
         * A due date for the card
         */
        due?: string,
        /**
         * The start date of a card, or `null`
         */
        start?: string | null,
        dueComplete?: boolean,
        /**
         * Comma-separated list of member IDs to add to the card
         */
        idMembers?: Array<TrelloID>,
        /**
         * Comma-separated list of label IDs to add to the card
         */
        idLabels?: Array<TrelloID>,
        /**
         * A URL starting with `http://` or `https://`
         */
        urlSource?: string,
        fileSource?: Blob,
        /**
         * The mimeType of the attachment. Max length 256
         */
        mimeType?: string,
        /**
         * The ID of a card to copy into the new card
         */
        idCardSource?: TrelloID,
        /**
         * If using `idCardSource` you can specify which properties to copy over. `all` or comma-separated list of: `attachments,checklists,customFields,comments,due,start,labels,members,start,stickers`
         */
        keepFromSource?: ('all' | Array<'attachments' | 'checklists' | 'comments' | 'customFields' | 'due' | 'start' | 'labels' | 'members' | 'stickers'>),
        /**
         * For use with/by the Map View
         */
        address?: string,
        /**
         * For use with/by the Map View
         */
        locationName?: string,
        /**
         * For use with/by the Map View. Should take the form latitude,longitude
         */
        coordinates?: string,
    }): CancelablePromise<Card> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cards',
            query: {
                'name': name,
                'desc': desc,
                'pos': pos,
                'due': due,
                'start': start,
                'dueComplete': dueComplete,
                'idList': idList,
                'idMembers': idMembers,
                'idLabels': idLabels,
                'urlSource': urlSource,
                'fileSource': fileSource,
                'mimeType': mimeType,
                'idCardSource': idCardSource,
                'keepFromSource': keepFromSource,
                'address': address,
                'locationName': locationName,
                'coordinates': coordinates,
            },
        });
    }

    /**
     * Get a Card
     * Get a card by its ID
     * @returns Card Success
     * @throws ApiError
     */
    public getCardsId({
        id,
        fields,
        actions,
        attachments,
        attachmentFields,
        members = false,
        memberFields,
        membersVoted = false,
        memberVotedFields,
        checkItemStates = false,
        checklists = 'none',
        checklistFields,
        board = false,
        boardFields,
        list = false,
        pluginData = false,
        stickers = false,
        stickerFields,
        customFieldItems = false,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `badges, checkItemStates, closed, dateLastActivity, desc, descData, due, start, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url`
         */
        fields?: ('all' | Array<'badges' | 'checkItemStates' | 'closed' | 'dateLastActivity' | 'desc' | 'descData' | 'due' | 'start' | 'email' | 'idBoard' | 'idChecklists' | 'idLabels' | 'idList' | 'idMembers' | 'idShort' | 'idAttachmentCover' | 'manualCoverAttachment' | 'labels' | 'name' | 'pos' | 'shortUrl' | 'url'>),
        /**
         * See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)
         */
        actions?: string,
        /**
         * `true`, `false`, or `cover`
         */
        attachments?: ('cover' | boolean),
        /**
         * `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        attachmentFields?: ('all' | Array<AttachmentFields>),
        /**
         * Whether to return member objects for members on the card
         */
        members?: boolean,
        /**
         * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`
         */
        memberFields?: ('all' | Array<MemberFields>),
        /**
         * Whether to return member objects for members who voted on the card
         */
        membersVoted?: boolean,
        /**
         * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`
         */
        memberVotedFields?: ('all' | Array<MemberFields>),
        checkItemStates?: boolean,
        /**
         * Whether to return the checklists on the card. `all` or `none`
         */
        checklists?: string,
        /**
         * `all` or a comma-separated list of `idBoard,idCard,name,pos`
         */
        checklistFields?: ('all' | Array<'idBoard' | 'idCard' | 'name' | 'pos'>),
        /**
         * Whether to return the board object the card is on
         */
        board?: boolean,
        /**
         * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object). **Defaults**: `name, desc, descData, closed, idOrganization, pinned, url, prefs`
         */
        boardFields?: ('all' | Array<BoardFields>),
        /**
         * See the [Lists Nested Resource](/cloud/trello/guides/rest-api/nested-resources/)
         */
        list?: boolean,
        /**
         * Whether to include pluginData on the card with the response
         */
        pluginData?: boolean,
        /**
         * Whether to include sticker models with the response
         */
        stickers?: boolean,
        /**
         * `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        stickerFields?: ('all' | Array<CustomSticker>),
        /**
         * Whether to include the customFieldItems
         */
        customFieldItems?: boolean,
    }): CancelablePromise<Card> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'actions': actions,
                'attachments': attachments,
                'attachment_fields': attachmentFields,
                'members': members,
                'member_fields': memberFields,
                'membersVoted': membersVoted,
                'memberVoted_fields': memberVotedFields,
                'checkItemStates': checkItemStates,
                'checklists': checklists,
                'checklist_fields': checklistFields,
                'board': board,
                'board_fields': boardFields,
                'list': list,
                'pluginData': pluginData,
                'stickers': stickers,
                'sticker_fields': stickerFields,
                'customFieldItems': customFieldItems,
            },
        });
    }

    /**
     * Update a Card
     * Update a card
     * @returns Card Success
     * @throws ApiError
     */
    public putCardsId({
        id,
        name,
        desc,
        closed,
        idMembers,
        idAttachmentCover,
        idList,
        idLabels,
        idBoard,
        pos,
        due,
        start,
        dueComplete,
        subscribed,
        address,
        locationName,
        coordinates,
        cover,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The new name for the card
         */
        name?: string,
        /**
         * The new description for the card
         */
        desc?: string,
        /**
         * Whether the card should be archived (closed: true)
         */
        closed?: boolean,
        /**
         * Comma-separated list of member IDs
         */
        idMembers?: TrelloID,
        /**
         * The ID of the image attachment the card should use as its cover, or null for none
         */
        idAttachmentCover?: TrelloID,
        /**
         * The ID of the list the card should be in
         */
        idList?: TrelloID,
        /**
         * Comma-separated list of label IDs
         */
        idLabels?: TrelloID,
        /**
         * The ID of the board the card should be on
         */
        idBoard?: TrelloID,
        /**
         * The position of the card in its list. `top`, `bottom`, or a positive float
         */
        pos?: ('top' | 'bottom' | number),
        /**
         * When the card is due, or `null`
         */
        due?: string | null,
        /**
         * The start date of a card, or `null`
         */
        start?: string | null,
        /**
         * Whether the due date should be marked complete
         */
        dueComplete?: boolean,
        /**
         * Whether the member is should be subscribed to the card
         */
        subscribed?: boolean,
        /**
         * For use with/by the Map View
         */
        address?: string,
        /**
         * For use with/by the Map View
         */
        locationName?: string,
        /**
         * For use with/by the Map View. Should be latitude,longitude
         */
        coordinates?: string,
        /**
         * Updates the card's cover
         * | Option | Values | About |
         * |--------|--------|-------|
         * | color | `pink`, `yellow`, `lime`, `blue`, `black`, `orange`, `red`, `purple`, `sky`, `green` | Makes the cover a solid color . |
         * | brightness | `dark`, `light` | Determines whether the text on the cover should be dark or light.
         * | url | An unsplash URL: https://images.unsplash.com | Used if making an image the cover. Only Unsplash URLs work.
         * | idAttachment | ID of an attachment on the card | Used if setting an attached image as the cover. |
         * | size | `normal`, `full` | Determines whether to show the card name on the cover, or below it. |
         *
         * `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a `color` and an `idAttachment` at the same time.
         *
         * On the brightness options, setting it to light will make the text on the card cover dark:
         * ![](/cloud/trello/images/rest/cards/cover-brightness-dark.png)
         *
         * And vice versa, setting it to dark will make the text on the card cover light:
         * ![](/cloud/trello/images/rest/cards/cover-brightness-light.png)
         */
        cover?: {
            /**
             * An object containing information regarding the card's cover
             * `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a color and an `idAttachment` at the same time.
             */
            value?: {
                /**
                 * One of: `pink, yellow, lime, blue, black, orange, red, purple, sky, green`
                 */
                color?: 'pink' | 'yellow' | 'lime' | 'blue' | 'black' | 'orange' | 'red' | 'purple' | 'sky' | 'green';
                /**
                 * Determines whether the text on the cover should be dark or light. Setting it to `light` will make the text on the card cover dark. And vice versa, setting it to dark will make the text on the card cover light
                 */
                brightness?: 'dark' | 'light';
                /**
                 * Used if making an image the cover. Only Unsplash URLs (https://images.unsplash.com/) work.
                 */
                url?: string;
            };
        },
    }): CancelablePromise<Card> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/cards/{id}',
            path: {
                'id': id,
            },
            query: {
                'name': name,
                'desc': desc,
                'closed': closed,
                'idMembers': idMembers,
                'idAttachmentCover': idAttachmentCover,
                'idList': idList,
                'idLabels': idLabels,
                'idBoard': idBoard,
                'pos': pos,
                'due': due,
                'start': start,
                'dueComplete': dueComplete,
                'subscribed': subscribed,
                'address': address,
                'locationName': locationName,
                'coordinates': coordinates,
                'cover': cover,
            },
        });
    }

    /**
     * Delete a Card
     * Delete a Card
     * @returns any Success
     * @throws ApiError
     */
    public deleteCardsId({
        id,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/cards/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get a field on a Card
     * Get a specific property of a card
     * @returns Card Success
     * @throws ApiError
     */
    public getCardsIdField({
        id,
        field,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The desired field.
         */
        field: CardFields,
    }): CancelablePromise<Card> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/{field}',
            path: {
                'id': id,
                'field': field,
            },
        });
    }

    /**
     * Get Actions on a Card
     * List the Actions on a Card
     * @returns Action Success
     * @throws ApiError
     */
    public getCardsIdActions({
        id,
        filter = 'commentCard, updateCard:idList',
        page,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
         */
        filter?: string,
        /**
         * The page of results for actions. Each page of results has 50 actions.
         */
        page?: number,
    }): CancelablePromise<Array<Action>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/actions',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
                'page': page,
            },
        });
    }

    /**
     * Get Attachments on a Card
     * List the attachments on a card
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdAttachments({
        id,
        fields,
        filter = 'false',
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<AttachmentFields>),
        /**
         * Use `cover` to restrict to just the cover attachment
         */
        filter?: string,
    }): CancelablePromise<Array<Attachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/attachments',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'filter': filter,
            },
        });
    }

    /**
     * Create Attachment On Card
     * Create an Attachment to a Card
     * @returns any Success
     * @throws ApiError
     */
    public postCardsIdAttachments({
        id,
        name,
        file,
        mimeType,
        url,
        setCover = false,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The name of the attachment. Max length 256.
         */
        name?: string,
        /**
         * The file to attach, as multipart/form-data
         */
        file?: Blob,
        /**
         * The mimeType of the attachment. Max length 256
         */
        mimeType?: string,
        /**
         * A URL to attach. Must start with `http://` or `https://`
         */
        url?: string,
        /**
         * Determines whether to use the new attachment as a cover for the Card.
         */
        setCover?: boolean,
    }): CancelablePromise<Array<Attachment>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cards/{id}/attachments',
            path: {
                'id': id,
            },
            query: {
                'name': name,
                'file': file,
                'mimeType': mimeType,
                'url': url,
                'setCover': setCover,
            },
        });
    }

    /**
     * Get an Attachment on a Card
     * Get a specific Attachment on a Card.
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdAttachmentsIdattachment({
        id,
        idAttachment,
        fields,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the Attachment
         */
        idAttachment: TrelloID,
        /**
         * The Attachment fields to be included in the response.
         */
        fields?: Array<AttachmentFields>,
    }): CancelablePromise<Array<Attachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/attachments/{idAttachment}',
            path: {
                'id': id,
                'idAttachment': idAttachment,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Delete an Attachment on a Card
     * Delete an Attachment
     * @returns any Success
     * @throws ApiError
     */
    public deletedCardsIdAttachmentsIdattachment({
        id,
        idAttachment,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the Attachment
         */
        idAttachment: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/cards/{id}/attachments/{idAttachment}',
            path: {
                'id': id,
                'idAttachment': idAttachment,
            },
        });
    }

    /**
     * Get the Board the Card is on
     * Get the board a card is on
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdBoard({
        id,
        fields,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)
         */
        fields?: ('all' | Array<BoardFields>),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/board',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get checkItems on a Card
     * Get the completed checklist items on a card
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdCheckitemstates({
        id,
        fields,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of: `idCheckItem`, `state`
         */
        fields?: ('all' | Array<'idCheckItem' | 'state'>),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/checkItemStates',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get Checklists on a Card
     * Get the checklists on a card
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdChecklists({
        id,
        checkItems = 'all',
        checkItemFields,
        filter = 'all',
        fields,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * `all` or `none`
         */
        checkItems?: 'all' | 'none',
        /**
         * `all` or a comma-separated list of: `name,nameData,pos,state,type,due,dueReminder,idMember`
         */
        checkItemFields?: ('all' | Array<'name' | 'nameData' | 'pos' | 'state' | 'type' | 'due' | 'dueReminder' | 'idMember'>),
        /**
         * `all` or `none`
         */
        filter?: 'all' | 'none',
        /**
         * `all` or a comma-separated list of: `idBoard,idCard,name,pos`
         */
        fields?: ('all' | Array<'all' | 'name' | 'nameData' | 'pos' | 'state' | 'type'>),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/checklists',
            path: {
                'id': id,
            },
            query: {
                'checkItems': checkItems,
                'checkItem_fields': checkItemFields,
                'filter': filter,
                'fields': fields,
            },
        });
    }

    /**
     * Create Checklist on a Card
     * Create a new checklist on a card
     * @returns any Success
     * @throws ApiError
     */
    public postCardsIdChecklists({
        id,
        name,
        idChecklistSource,
        pos,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The name of the checklist
         */
        name?: string,
        /**
         * The ID of a source checklist to copy into the new one
         */
        idChecklistSource?: TrelloID,
        /**
         * The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
         */
        pos?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cards/{id}/checklists',
            path: {
                'id': id,
            },
            query: {
                'name': name,
                'idChecklistSource': idChecklistSource,
                'pos': pos,
            },
        });
    }

    /**
     * Get checkItem on a Card
     * Get a specific checkItem on a card
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdCheckitemIdcheckitem({
        id,
        idCheckItem,
        fields,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the checkitem
         */
        idCheckItem: TrelloID,
        /**
         * `all` or a comma-separated list of `name,nameData,pos,state,type,due,dueReminder,idMember`
         */
        fields?: ('all' | Array<'name' | 'nameData' | 'pos' | 'state' | 'due' | 'dueReminder' | 'idMember'>),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/checkItem/{idCheckItem}',
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
     * Update a checkItem on a Card
     * Update an item in a checklist on a card.
     * @returns any Success
     * @throws ApiError
     */
    public putCardsIdCheckitemIdcheckitem({
        id,
        idCheckItem,
        name,
        state,
        idChecklist,
        pos,
        due,
        dueReminder,
        idMember,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the checkitem
         */
        idCheckItem: TrelloID,
        /**
         * The new name for the checklist item
         */
        name?: string,
        /**
         * One of: `complete`, `incomplete`
         */
        state?: 'complete' | 'incomplete',
        /**
         * The ID of the checklist this item is in
         */
        idChecklist?: TrelloID,
        /**
         * `top`, `bottom`, or a positive float
         */
        pos?: posStringOrNumber,
        /**
         * A due date for the checkitem
         */
        due?: string,
        /**
         * A dueReminder for the due date on the checkitem
         */
        dueReminder?: number | null,
        /**
         * The ID of the member to remove from the card
         */
        idMember?: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/cards/{id}/checkItem/{idCheckItem}',
            path: {
                'id': id,
                'idCheckItem': idCheckItem,
            },
            query: {
                'name': name,
                'state': state,
                'idChecklist': idChecklist,
                'pos': pos,
                'due': due,
                'dueReminder': dueReminder,
                'idMember': idMember,
            },
        });
    }

    /**
     * Delete checkItem on a Card
     * Delete a checklist item
     * @returns any Success
     * @throws ApiError
     */
    public deleteCardsIdCheckitemIdcheckitem({
        id,
        idCheckItem,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the checkitem
         */
        idCheckItem: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/cards/{id}/checkItem/{idCheckItem}',
            path: {
                'id': id,
                'idCheckItem': idCheckItem,
            },
        });
    }

    /**
     * Get the List of a Card
     * Get the list a card is in
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdList({
        id,
        fields,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<ListFields>),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/list',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get the Members of a Card
     * Get the members on a card
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdMembers({
        id,
        fields,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<MemberFields>),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/members',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get Members who have voted on a Card
     * Get the members who have voted on a card
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdMembersvoted({
        id,
        fields,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<MemberFields>),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/membersVoted',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Add Member vote to Card
     * Vote on the card for a given member.
     * @returns any Success
     * @throws ApiError
     */
    public cardsidmembersvoted1({
        id,
        value,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the member to vote 'yes' on the card
         */
        value: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cards/{id}/membersVoted',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Get pluginData on a Card
     * Get any shared pluginData on a card.
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdPlugindata({
        id,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/pluginData',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get Stickers on a Card
     * Get the stickers on a card
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdStickers({
        id,
        fields,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<CustomSticker>),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/stickers',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Add a Sticker to a Card
     * Add a sticker to a card
     * @returns any Success
     * @throws ApiError
     */
    public postCardsIdStickers({
        id,
        image,
        top,
        left,
        zIndex,
        rotate,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * For custom stickers, the id of the sticker. For default stickers, the string identifier (like 'taco-cool', see below)
         */
        image: string,
        /**
         * The top position of the sticker, from -60 to 100
         */
        top: number,
        /**
         * The left position of the sticker, from -60 to 100
         */
        left: number,
        /**
         * The z-index of the sticker
         */
        zIndex: number,
        /**
         * The rotation of the sticker
         */
        rotate?: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cards/{id}/stickers',
            path: {
                'id': id,
            },
            query: {
                'image': image,
                'top': top,
                'left': left,
                'zIndex': zIndex,
                'rotate': rotate,
            },
        });
    }

    /**
     * Get a Sticker on a Card
     * Get a specific sticker on a card
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdStickersIdsticker({
        id,
        idSticker,
        fields,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the sticker
         */
        idSticker: TrelloID,
        /**
         * `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<CustomSticker>),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/stickers/{idSticker}',
            path: {
                'id': id,
                'idSticker': idSticker,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Delete a Sticker on a Card
     * Remove a sticker from the card
     * @returns any Success
     * @throws ApiError
     */
    public deleteCardsIdStickersIdsticker({
        id,
        idSticker,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the sticker
         */
        idSticker: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/cards/{id}/stickers/{idSticker}',
            path: {
                'id': id,
                'idSticker': idSticker,
            },
        });
    }

    /**
     * Update a Sticker on a Card
     * Update a sticker on a card
     * @returns any Success
     * @throws ApiError
     */
    public putCardsIdStickersIdsticker({
        id,
        idSticker,
        top,
        left,
        zIndex,
        rotate,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the sticker
         */
        idSticker: TrelloID,
        /**
         * The top position of the sticker, from -60 to 100
         */
        top: number,
        /**
         * The left position of the sticker, from -60 to 100
         */
        left: number,
        /**
         * The z-index of the sticker
         */
        zIndex: number,
        /**
         * The rotation of the sticker
         */
        rotate?: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/cards/{id}/stickers/{idSticker}',
            path: {
                'id': id,
                'idSticker': idSticker,
            },
            query: {
                'top': top,
                'left': left,
                'zIndex': zIndex,
                'rotate': rotate,
            },
        });
    }

    /**
     * Update Comment Action on a Card
     * Update an existing comment
     * @returns any Success
     * @throws ApiError
     */
    public putCardsIdActionsIdactionComments({
        id,
        idAction,
        text,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the comment action to update
         */
        idAction: TrelloID,
        /**
         * The new text for the comment
         */
        text: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/cards/{id}/actions/{idAction}/comments',
            path: {
                'id': id,
                'idAction': idAction,
            },
            query: {
                'text': text,
            },
        });
    }

    /**
     * Delete a comment on a Card
     * Delete a comment
     * @returns any Success
     * @throws ApiError
     */
    public deleteCardsIdActionsIdComments({
        id,
        idAction,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the comment action to update
         */
        idAction: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/cards/{id}/actions/{idAction}/comments',
            path: {
                'id': id,
                'idAction': idAction,
            },
        });
    }

    /**
     * Update Custom Field item on Card
     * Setting, updating, and removing the value for a Custom Field on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)
     * @returns any Success
     * @throws ApiError
     */
    public putCardsIdcardCustomfieldIdcustomfieldItem({
        idCard,
        idCustomField,
        requestBody,
    }: {
        /**
         * ID of the card that the Custom Field value should be set/updated for
         */
        idCard: TrelloID,
        /**
         * ID of the Custom Field on the card.
         */
        idCustomField: TrelloID,
        requestBody?: ({
            /**
             * An object containing the key and value to set for the card's Custom Field value. The key used to set the value should match the type of Custom Field defined.
             */
            value?: {
                text?: string;
                checked?: boolean;
                date?: string;
                number?: number;
            };
        } | {
            /**
             * The ID of the option for the list type Custom Field
             */
            idValue?: TrelloID;
        }),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/cards/{idCard}/customField/{idCustomField}/item',
            path: {
                'idCard': idCard,
                'idCustomField': idCustomField,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Custom Field Items for a Card
     * Get the custom field items for a card.
     * @returns CustomFieldItems Success
     * @throws ApiError
     */
    public getCardsIdCustomfielditems({
        id,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
    }): CancelablePromise<Array<CustomFieldItems>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/{id}/customFieldItems',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Add a new comment to a Card
     * Add a new comment to a card
     * @returns Action Success
     * @throws ApiError
     */
    public postCardsIdActionsComments({
        id,
        text,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The comment
         */
        text: string,
    }): CancelablePromise<Action> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cards/{id}/actions/comments',
            path: {
                'id': id,
            },
            query: {
                'text': text,
            },
        });
    }

    /**
     * Add a Label to a Card
     * Add a label to a card
     * @returns any Success
     * @throws ApiError
     */
    public postCardsIdIdlabels({
        id,
        value,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the label to add
         */
        value?: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cards/{id}/idLabels',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Add a Member to a Card
     * Add a member to a card
     * @returns any Success
     * @throws ApiError
     */
    public postCardsIdIdmembers({
        id,
        value,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the Member to add to the card
         */
        value?: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cards/{id}/idMembers',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Create a new Label on a Card
     * Create a new label for the board and add it to the given card.
     * @returns any Success
     * @throws ApiError
     */
    public postCardsIdLabels({
        id,
        color,
        name,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * A valid label color or `null`. See [labels](/cloud/trello/guides/rest-api/object-definitions/)
         */
        color: string,
        /**
         * A name for the label
         */
        name?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cards/{id}/labels',
            path: {
                'id': id,
            },
            query: {
                'color': color,
                'name': name,
            },
        });
    }

    /**
     * Mark a Card's Notifications as read
     * Mark notifications about this card as read
     * @returns any Success
     * @throws ApiError
     */
    public postCardsIdMarkassociatednotificationsread({
        id,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cards/{id}/markAssociatedNotificationsRead',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Remove a Label from a Card
     * Remove a label from a card
     * @returns any Success
     * @throws ApiError
     */
    public deleteCardsIdIdlabelsIdlabel({
        id,
        idLabel,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the label to remove
         */
        idLabel: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/cards/{id}/idLabels/{idLabel}',
            path: {
                'id': id,
                'idLabel': idLabel,
            },
        });
    }

    /**
     * Remove a Member from a Card
     * Remove a member from a card
     * @returns any Success
     * @throws ApiError
     */
    public deleteIdIdmembersIdmember({
        id,
        idMember,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the member to remove from the card
         */
        idMember: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/cards/{id}/idMembers/{idMember}',
            path: {
                'id': id,
                'idMember': idMember,
            },
        });
    }

    /**
     * Remove a Member's Vote on a Card
     * Remove a member's vote from a card
     * @returns any Success
     * @throws ApiError
     */
    public deleteCardsIdMembersvotedIdmember({
        id,
        idMember,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the member whose vote to remove
         */
        idMember: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/cards/{id}/membersVoted/{idMember}',
            path: {
                'id': id,
                'idMember': idMember,
            },
        });
    }

    /**
     * Update Checkitem on Checklist on Card
     * Update an item in a checklist on a card.
     * @returns CheckItem Success
     * @throws ApiError
     */
    public putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem({
        idCard,
        idCheckItem,
        idChecklist,
        pos,
    }: {
        /**
         * The ID of the Card
         */
        idCard: TrelloID,
        /**
         * The ID of the checklist item to update
         */
        idCheckItem: TrelloID,
        /**
         * The ID of the item to update.
         */
        idChecklist: TrelloID,
        /**
         * `top`, `bottom`, or a positive float
         */
        pos?: posStringOrNumber,
    }): CancelablePromise<CheckItem> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}',
            path: {
                'idCard': idCard,
                'idCheckItem': idCheckItem,
                'idChecklist': idChecklist,
            },
            query: {
                'pos': pos,
            },
        });
    }

    /**
     * Delete a Checklist on a Card
     * Delete a checklist from a card
     * @returns any Success
     * @throws ApiError
     */
    public deleteCardsIdChecklistsIdchecklist({
        id,
        idChecklist,
    }: {
        /**
         * The ID of the Card
         */
        id: TrelloID,
        /**
         * The ID of the checklist to delete
         */
        idChecklist: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/cards/{id}/checklists/{idChecklist}',
            path: {
                'id': id,
                'idChecklist': idChecklist,
            },
        });
    }

}
