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
     * @param idList The ID of the list the card should be created in
     * @param name The name for the card
     * @param desc The description for the card
     * @param pos The position of the new card. `top`, `bottom`, or a positive float
     * @param due A due date for the card
     * @param start The start date of a card, or `null`
     * @param dueComplete
     * @param idMembers Comma-separated list of member IDs to add to the card
     * @param idLabels Comma-separated list of label IDs to add to the card
     * @param urlSource A URL starting with `http://` or `https://`
     * @param fileSource
     * @param mimeType The mimeType of the attachment. Max length 256
     * @param idCardSource The ID of a card to copy into the new card
     * @param keepFromSource If using `idCardSource` you can specify which properties to copy over. `all` or comma-separated list of: `attachments,checklists,customFields,comments,due,start,labels,members,start,stickers`
     * @param address For use with/by the Map View
     * @param locationName For use with/by the Map View
     * @param coordinates For use with/by the Map View. Should take the form latitude,longitude
     * @returns Card Success
     * @throws ApiError
     */
    public postCards(
        idList: TrelloID,
        name?: string,
        desc?: string,
        pos?: ('top' | 'bottom' | number),
        due?: string,
        start?: string | null,
        dueComplete?: boolean,
        idMembers?: Array<TrelloID>,
        idLabels?: Array<TrelloID>,
        urlSource?: string,
        fileSource?: Blob,
        mimeType?: string,
        idCardSource?: TrelloID,
        keepFromSource?: ('all' | Array<'attachments' | 'checklists' | 'comments' | 'customFields' | 'due' | 'start' | 'labels' | 'members' | 'stickers'>),
        address?: string,
        locationName?: string,
        coordinates?: string,
    ): CancelablePromise<Card> {
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
     * @param id The ID of the Card
     * @param fields `all` or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `badges, checkItemStates, closed, dateLastActivity, desc, descData, due, start, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url`
     * @param actions See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)
     * @param attachments `true`, `false`, or `cover`
     * @param attachmentFields `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param members Whether to return member objects for members on the card
     * @param memberFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`
     * @param membersVoted Whether to return member objects for members who voted on the card
     * @param memberVotedFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`
     * @param checkItemStates
     * @param checklists Whether to return the checklists on the card. `all` or `none`
     * @param checklistFields `all` or a comma-separated list of `idBoard,idCard,name,pos`
     * @param board Whether to return the board object the card is on
     * @param boardFields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object). **Defaults**: `name, desc, descData, closed, idOrganization, pinned, url, prefs`
     * @param list See the [Lists Nested Resource](/cloud/trello/guides/rest-api/nested-resources/)
     * @param pluginData Whether to include pluginData on the card with the response
     * @param stickers Whether to include sticker models with the response
     * @param stickerFields `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param customFieldItems Whether to include the customFieldItems
     * @returns Card Success
     * @throws ApiError
     */
    public getCardsId(
        id: TrelloID,
        fields?: ('all' | Array<'badges' | 'checkItemStates' | 'closed' | 'dateLastActivity' | 'desc' | 'descData' | 'due' | 'start' | 'email' | 'idBoard' | 'idChecklists' | 'idLabels' | 'idList' | 'idMembers' | 'idShort' | 'idAttachmentCover' | 'manualCoverAttachment' | 'labels' | 'name' | 'pos' | 'shortUrl' | 'url'>),
        actions?: string,
        attachments?: ('cover' | boolean),
        attachmentFields?: ('all' | Array<AttachmentFields>),
        members: boolean = false,
        memberFields?: ('all' | Array<MemberFields>),
        membersVoted: boolean = false,
        memberVotedFields?: ('all' | Array<MemberFields>),
        checkItemStates: boolean = false,
        checklists: string = 'none',
        checklistFields?: ('all' | Array<'idBoard' | 'idCard' | 'name' | 'pos'>),
        board: boolean = false,
        boardFields?: ('all' | Array<BoardFields>),
        list: boolean = false,
        pluginData: boolean = false,
        stickers: boolean = false,
        stickerFields?: ('all' | Array<CustomSticker>),
        customFieldItems: boolean = false,
    ): CancelablePromise<Card> {
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
     * @param id The ID of the Card
     * @param name The new name for the card
     * @param desc The new description for the card
     * @param closed Whether the card should be archived (closed: true)
     * @param idMembers Comma-separated list of member IDs
     * @param idAttachmentCover The ID of the image attachment the card should use as its cover, or null for none
     * @param idList The ID of the list the card should be in
     * @param idLabels Comma-separated list of label IDs
     * @param idBoard The ID of the board the card should be on
     * @param pos The position of the card in its list. `top`, `bottom`, or a positive float
     * @param due When the card is due, or `null`
     * @param start The start date of a card, or `null`
     * @param dueComplete Whether the due date should be marked complete
     * @param subscribed Whether the member is should be subscribed to the card
     * @param address For use with/by the Map View
     * @param locationName For use with/by the Map View
     * @param coordinates For use with/by the Map View. Should be latitude,longitude
     * @param cover Updates the card's cover
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
     * @returns Card Success
     * @throws ApiError
     */
    public putCardsId(
        id: TrelloID,
        name?: string,
        desc?: string,
        closed?: boolean,
        idMembers?: TrelloID,
        idAttachmentCover?: TrelloID,
        idList?: TrelloID,
        idLabels?: TrelloID,
        idBoard?: TrelloID,
        pos?: ('top' | 'bottom' | number),
        due?: string | null,
        start?: string | null,
        dueComplete?: boolean,
        subscribed?: boolean,
        address?: string,
        locationName?: string,
        coordinates?: string,
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
    ): CancelablePromise<Card> {
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
     * @param id The ID of the Card
     * @returns any Success
     * @throws ApiError
     */
    public deleteCardsId(
        id: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param field The desired field.
     * @returns Card Success
     * @throws ApiError
     */
    public getCardsIdField(
        id: TrelloID,
        field: CardFields,
    ): CancelablePromise<Card> {
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
     * @param id The ID of the Card
     * @param filter A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
     * @param page The page of results for actions. Each page of results has 50 actions.
     * @returns Action Success
     * @throws ApiError
     */
    public getCardsIdActions(
        id: TrelloID,
        filter: string = 'commentCard, updateCard:idList',
        page?: number,
    ): CancelablePromise<Array<Action>> {
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
     * @param id The ID of the Card
     * @param fields `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param filter Use `cover` to restrict to just the cover attachment
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdAttachments(
        id: TrelloID,
        fields?: ('all' | Array<AttachmentFields>),
        filter: string = 'false',
    ): CancelablePromise<Array<Attachment>> {
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
     * @param id The ID of the Card
     * @param name The name of the attachment. Max length 256.
     * @param file The file to attach, as multipart/form-data
     * @param mimeType The mimeType of the attachment. Max length 256
     * @param url A URL to attach. Must start with `http://` or `https://`
     * @param setCover Determines whether to use the new attachment as a cover for the Card.
     * @returns any Success
     * @throws ApiError
     */
    public postCardsIdAttachments(
        id: TrelloID,
        name?: string,
        file?: Blob,
        mimeType?: string,
        url?: string,
        setCover: boolean = false,
    ): CancelablePromise<Array<Attachment>> {
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
     * @param id The ID of the Card
     * @param idAttachment The ID of the Attachment
     * @param fields The Attachment fields to be included in the response.
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdAttachmentsIdattachment(
        id: TrelloID,
        idAttachment: TrelloID,
        fields?: Array<AttachmentFields>,
    ): CancelablePromise<Array<Attachment>> {
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
     * @param id The ID of the Card
     * @param idAttachment The ID of the Attachment
     * @returns any Success
     * @throws ApiError
     */
    public deletedCardsIdAttachmentsIdattachment(
        id: TrelloID,
        idAttachment: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdBoard(
        id: TrelloID,
        fields?: ('all' | Array<BoardFields>),
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param fields `all` or a comma-separated list of: `idCheckItem`, `state`
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdCheckitemstates(
        id: TrelloID,
        fields?: ('all' | Array<'idCheckItem' | 'state'>),
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param checkItems `all` or `none`
     * @param checkItemFields `all` or a comma-separated list of: `name,nameData,pos,state,type,due,dueReminder,idMember`
     * @param filter `all` or `none`
     * @param fields `all` or a comma-separated list of: `idBoard,idCard,name,pos`
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdChecklists(
        id: TrelloID,
        checkItems: 'all' | 'none' = 'all',
        checkItemFields?: ('all' | Array<'name' | 'nameData' | 'pos' | 'state' | 'type' | 'due' | 'dueReminder' | 'idMember'>),
        filter: 'all' | 'none' = 'all',
        fields?: ('all' | Array<'all' | 'name' | 'nameData' | 'pos' | 'state' | 'type'>),
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param name The name of the checklist
     * @param idChecklistSource The ID of a source checklist to copy into the new one
     * @param pos The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.
     * @returns any Success
     * @throws ApiError
     */
    public postCardsIdChecklists(
        id: TrelloID,
        name?: string,
        idChecklistSource?: TrelloID,
        pos?: string,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param idCheckItem The ID of the checkitem
     * @param fields `all` or a comma-separated list of `name,nameData,pos,state,type,due,dueReminder,idMember`
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdCheckitemIdcheckitem(
        id: TrelloID,
        idCheckItem: TrelloID,
        fields?: ('all' | Array<'name' | 'nameData' | 'pos' | 'state' | 'due' | 'dueReminder' | 'idMember'>),
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param idCheckItem The ID of the checkitem
     * @param name The new name for the checklist item
     * @param state One of: `complete`, `incomplete`
     * @param idChecklist The ID of the checklist this item is in
     * @param pos `top`, `bottom`, or a positive float
     * @param due A due date for the checkitem
     * @param dueReminder A dueReminder for the due date on the checkitem
     * @param idMember The ID of the member to remove from the card
     * @returns any Success
     * @throws ApiError
     */
    public putCardsIdCheckitemIdcheckitem(
        id: TrelloID,
        idCheckItem: TrelloID,
        name?: string,
        state?: 'complete' | 'incomplete',
        idChecklist?: TrelloID,
        pos?: posStringOrNumber,
        due?: string,
        dueReminder?: number | null,
        idMember?: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param idCheckItem The ID of the checkitem
     * @returns any Success
     * @throws ApiError
     */
    public deleteCardsIdCheckitemIdcheckitem(
        id: TrelloID,
        idCheckItem: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param fields `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdList(
        id: TrelloID,
        fields?: ('all' | Array<ListFields>),
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdMembers(
        id: TrelloID,
        fields?: ('all' | Array<MemberFields>),
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdMembersvoted(
        id: TrelloID,
        fields?: ('all' | Array<MemberFields>),
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param value The ID of the member to vote 'yes' on the card
     * @returns any Success
     * @throws ApiError
     */
    public cardsidmembersvoted1(
        id: TrelloID,
        value: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdPlugindata(
        id: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param fields `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdStickers(
        id: TrelloID,
        fields?: ('all' | Array<CustomSticker>),
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param image For custom stickers, the id of the sticker. For default stickers, the string identifier (like 'taco-cool', see below)
     * @param top The top position of the sticker, from -60 to 100
     * @param left The left position of the sticker, from -60 to 100
     * @param zIndex The z-index of the sticker
     * @param rotate The rotation of the sticker
     * @returns any Success
     * @throws ApiError
     */
    public postCardsIdStickers(
        id: TrelloID,
        image: string,
        top: number,
        left: number,
        zIndex: number,
        rotate?: number,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param idSticker The ID of the sticker
     * @param fields `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getCardsIdStickersIdsticker(
        id: TrelloID,
        idSticker: TrelloID,
        fields?: ('all' | Array<CustomSticker>),
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param idSticker The ID of the sticker
     * @returns any Success
     * @throws ApiError
     */
    public deleteCardsIdStickersIdsticker(
        id: TrelloID,
        idSticker: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param idSticker The ID of the sticker
     * @param top The top position of the sticker, from -60 to 100
     * @param left The left position of the sticker, from -60 to 100
     * @param zIndex The z-index of the sticker
     * @param rotate The rotation of the sticker
     * @returns any Success
     * @throws ApiError
     */
    public putCardsIdStickersIdsticker(
        id: TrelloID,
        idSticker: TrelloID,
        top: number,
        left: number,
        zIndex: number,
        rotate?: number,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param idAction The ID of the comment action to update
     * @param text The new text for the comment
     * @returns any Success
     * @throws ApiError
     */
    public putCardsIdActionsIdactionComments(
        id: TrelloID,
        idAction: TrelloID,
        text: string,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param idAction The ID of the comment action to update
     * @returns any Success
     * @throws ApiError
     */
    public deleteCardsIdActionsIdComments(
        id: TrelloID,
        idAction: TrelloID,
    ): CancelablePromise<any> {
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
     * @param idCard ID of the card that the Custom Field value should be set/updated for
     * @param idCustomField ID of the Custom Field on the card.
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public putCardsIdcardCustomfieldIdcustomfieldItem(
        idCard: TrelloID,
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
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @returns CustomFieldItems Success
     * @throws ApiError
     */
    public getCardsIdCustomfielditems(
        id: TrelloID,
    ): CancelablePromise<Array<CustomFieldItems>> {
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
     * @param id The ID of the Card
     * @param text The comment
     * @returns Action Success
     * @throws ApiError
     */
    public postCardsIdActionsComments(
        id: TrelloID,
        text: string,
    ): CancelablePromise<Action> {
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
     * @param id The ID of the Card
     * @param value The ID of the label to add
     * @returns any Success
     * @throws ApiError
     */
    public postCardsIdIdlabels(
        id: TrelloID,
        value?: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param value The ID of the Member to add to the card
     * @returns any Success
     * @throws ApiError
     */
    public postCardsIdIdmembers(
        id: TrelloID,
        value?: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param color A valid label color or `null`. See [labels](/cloud/trello/guides/rest-api/object-definitions/)
     * @param name A name for the label
     * @returns any Success
     * @throws ApiError
     */
    public postCardsIdLabels(
        id: TrelloID,
        color: string,
        name?: string,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @returns any Success
     * @throws ApiError
     */
    public postCardsIdMarkassociatednotificationsread(
        id: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param idLabel The ID of the label to remove
     * @returns any Success
     * @throws ApiError
     */
    public deleteCardsIdIdlabelsIdlabel(
        id: TrelloID,
        idLabel: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param idMember The ID of the member to remove from the card
     * @returns any Success
     * @throws ApiError
     */
    public deleteIdIdmembersIdmember(
        id: TrelloID,
        idMember: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Card
     * @param idMember The ID of the member whose vote to remove
     * @returns any Success
     * @throws ApiError
     */
    public deleteCardsIdMembersvotedIdmember(
        id: TrelloID,
        idMember: TrelloID,
    ): CancelablePromise<any> {
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
     * @param idCard The ID of the Card
     * @param idCheckItem The ID of the checklist item to update
     * @param idChecklist The ID of the item to update.
     * @param pos `top`, `bottom`, or a positive float
     * @returns CheckItem Success
     * @throws ApiError
     */
    public putCardsIdcardChecklistIdchecklistCheckitemIdcheckitem(
        idCard: TrelloID,
        idCheckItem: TrelloID,
        idChecklist: TrelloID,
        pos?: posStringOrNumber,
    ): CancelablePromise<CheckItem> {
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
     * @param id The ID of the Card
     * @param idChecklist The ID of the checklist to delete
     * @returns any Success
     * @throws ApiError
     */
    public deleteCardsIdChecklistsIdchecklist(
        id: TrelloID,
        idChecklist: TrelloID,
    ): CancelablePromise<any> {
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
