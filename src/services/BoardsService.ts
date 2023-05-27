/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Action } from '../models/Action';
import type { Board } from '../models/Board';
import type { BoardStars } from '../models/BoardStars';
import type { CardFields } from '../models/CardFields';
import type { CustomField } from '../models/CustomField';
import type { Error } from '../models/Error';
import type { Label } from '../models/Label';
import type { ListFields } from '../models/ListFields';
import type { MemberFields } from '../models/MemberFields';
import type { Memberships } from '../models/Memberships';
import type { Plugin } from '../models/Plugin';
import type { TrelloID } from '../models/TrelloID';
import type { TrelloList } from '../models/TrelloList';
import type { ViewFilter } from '../models/ViewFilter';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BoardsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Memberships of a Board
     * Get information about the memberships users have to the board.
     * @returns Memberships Success
     * @throws ApiError
     */
    public getBoardsIdMemberships({
        id,
        filter = 'all',
        activity = false,
        orgMemberType = false,
        member = false,
        memberFields = 'id',
    }: {
        /**
         * The ID of the board
         */
        id: TrelloID,
        /**
         * One of `admins`, `all`, `none`, `normal`
         */
        filter?: 'admins' | 'all' | 'none' | 'normal',
        /**
         * Works for premium organizations only.
         */
        activity?: boolean,
        /**
         * Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`.
         */
        orgMemberType?: boolean,
        /**
         * Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/).
         */
        member?: boolean,
        /**
         * Fields to show if `member=true`. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/).
         */
        memberFields?: MemberFields,
    }): CancelablePromise<Memberships> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{id}/memberships',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
                'activity': activity,
                'orgMemberType': orgMemberType,
                'member': member,
                'member_fields': memberFields,
            },
        });
    }

    /**
     * Get a Board
     * Request a single board.
     * @returns Board Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public getBoardsId({
        id,
        actions = 'all',
        boardStars = 'none',
        cards = 'none',
        cardPluginData = false,
        checklists = 'none',
        customFields = false,
        fields = 'name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames',
        labels,
        lists = 'open',
        members = 'none',
        memberships = 'none',
        pluginData = false,
        organization = false,
        organizationPluginData = false,
        myPrefs = false,
        tags = false,
    }: {
        id: TrelloID,
        /**
         * This is a nested resource. Read more about actions as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
         */
        actions?: string,
        /**
         * Valid values are one of: `mine` or `none`.
         */
        boardStars?: string,
        /**
         * This is a nested resource. Read more about cards as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
         */
        cards?: string,
        /**
         * Use with the `cards` param to include card pluginData with the response
         */
        cardPluginData?: boolean,
        /**
         * This is a nested resource. Read more about checklists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
         */
        checklists?: string,
        /**
         * This is a nested resource. Read more about custom fields as nested resources [here](#custom-fields-nested-resource).
         */
        customFields?: boolean,
        /**
         * The fields of the board to be included in the response. Valid values: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url
         */
        fields?: string,
        /**
         * This is a nested resource. Read more about labels as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
         */
        labels?: string,
        /**
         * This is a nested resource. Read more about lists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
         */
        lists?: string,
        /**
         * This is a nested resource. Read more about members as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
         */
        members?: string,
        /**
         * This is a nested resource. Read more about memberships as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
         */
        memberships?: string,
        /**
         * Determines whether the pluginData for this board should be returned. Valid values: true or false.
         */
        pluginData?: boolean,
        /**
         * This is a nested resource. Read more about organizations as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
         */
        organization?: boolean,
        /**
         * Use with the `organization` param to include organization pluginData with the response
         */
        organizationPluginData?: boolean,
        myPrefs?: boolean,
        /**
         * Also known as collections, tags, refer to the collection(s) that a Board belongs to.
         */
        tags?: boolean,
    }): CancelablePromise<Board | Error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{id}',
            path: {
                'id': id,
            },
            query: {
                'actions': actions,
                'boardStars': boardStars,
                'cards': cards,
                'card_pluginData': cardPluginData,
                'checklists': checklists,
                'customFields': customFields,
                'fields': fields,
                'labels': labels,
                'lists': lists,
                'members': members,
                'memberships': memberships,
                'pluginData': pluginData,
                'organization': organization,
                'organization_pluginData': organizationPluginData,
                'myPrefs': myPrefs,
                'tags': tags,
            },
            errors: {
                401: `Unauthorized`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Update a Board
     * Update an existing board by id
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsId({
        id,
        name,
        desc,
        closed,
        subscribed,
        idOrganization,
        prefsPermissionLevel,
        prefsSelfJoin,
        prefsCardCovers,
        prefsHideVotes,
        prefsInvitations,
        prefsVoting,
        prefsComments,
        prefsBackground,
        prefsCardAging,
        prefsCalendarFeedEnabled,
        labelNamesGreen,
        labelNamesYellow,
        labelNamesOrange,
        labelNamesRed,
        labelNamesPurple,
        labelNamesBlue,
    }: {
        id: TrelloID,
        /**
         * The new name for the board. 1 to 16384 characters long.
         */
        name?: string,
        /**
         * A new description for the board, 0 to 16384 characters long
         */
        desc?: string,
        /**
         * Whether the board is closed
         */
        closed?: boolean,
        /**
         * Whether the acting user is subscribed to the board
         */
        subscribed?: TrelloID,
        /**
         * The id of the Workspace the board should be moved to
         */
        idOrganization?: string,
        /**
         * One of: org, private, public
         */
        prefsPermissionLevel?: string,
        /**
         * Whether Workspace members can join the board themselves
         */
        prefsSelfJoin?: boolean,
        /**
         * Whether card covers should be displayed on this board
         */
        prefsCardCovers?: boolean,
        /**
         * Determines whether the Voting Power-Up should hide who voted on cards or not.
         */
        prefsHideVotes?: boolean,
        /**
         * Who can invite people to this board. One of: admins, members
         */
        prefsInvitations?: string,
        /**
         * Who can vote on this board. One of disabled, members, observers, org, public
         */
        prefsVoting?: string,
        /**
         * Who can comment on cards on this board. One of: disabled, members, observers, org, public
         */
        prefsComments?: string,
        /**
         * The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey
         */
        prefsBackground?: string,
        /**
         * One of: pirate, regular
         */
        prefsCardAging?: string,
        /**
         * Determines whether the calendar feed is enabled or not.
         */
        prefsCalendarFeedEnabled?: boolean,
        /**
         * Name for the green label. 1 to 16384 characters long
         */
        labelNamesGreen?: string,
        /**
         * Name for the yellow label. 1 to 16384 characters long
         */
        labelNamesYellow?: string,
        /**
         * Name for the orange label. 1 to 16384 characters long
         */
        labelNamesOrange?: string,
        /**
         * Name for the red label. 1 to 16384 characters long
         */
        labelNamesRed?: string,
        /**
         * Name for the purple label. 1 to 16384 characters long
         */
        labelNamesPurple?: string,
        /**
         * Name for the blue label. 1 to 16384 characters long
         */
        labelNamesBlue?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/boards/{id}',
            path: {
                'id': id,
            },
            query: {
                'name': name,
                'desc': desc,
                'closed': closed,
                'subscribed': subscribed,
                'idOrganization': idOrganization,
                'prefs/permissionLevel': prefsPermissionLevel,
                'prefs/selfJoin': prefsSelfJoin,
                'prefs/cardCovers': prefsCardCovers,
                'prefs/hideVotes': prefsHideVotes,
                'prefs/invitations': prefsInvitations,
                'prefs/voting': prefsVoting,
                'prefs/comments': prefsComments,
                'prefs/background': prefsBackground,
                'prefs/cardAging': prefsCardAging,
                'prefs/calendarFeedEnabled': prefsCalendarFeedEnabled,
                'labelNames/green': labelNamesGreen,
                'labelNames/yellow': labelNamesYellow,
                'labelNames/orange': labelNamesOrange,
                'labelNames/red': labelNamesRed,
                'labelNames/purple': labelNamesPurple,
                'labelNames/blue': labelNamesBlue,
            },
        });
    }

    /**
     * Delete a Board
     * Delete a board.
     * @returns any Success
     * @throws ApiError
     */
    public deleteBoardsId({
        id,
    }: {
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/boards/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get a field on a Board
     * Get a single, specific field on a board
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdField({
        id,
        field,
    }: {
        /**
         * The ID of the board.
         */
        id: string,
        /**
         * The field you'd like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
         */
        field: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{id}/{field}',
            path: {
                'id': id,
                'field': field,
            },
        });
    }

    /**
     * Get Actions of a Board
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdActions({
        boardId,
        fields,
        filter,
        format = 'list',
        idModels,
        limit = 50,
        member = true,
        memberFields = 'activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username',
        memberCreator = true,
        memberCreatorFields = 'activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username',
        page,
        reactions,
        before,
        since,
    }: {
        boardId: string,
        /**
         * The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object).
         */
        fields?: Action,
        /**
         * A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/).
         */
        filter?: string,
        /**
         * The format of the returned Actions. Either list or count.
         */
        format?: string,
        /**
         * A comma-separated list of idModels. Only actions related to these models will be returned.
         */
        idModels?: string,
        /**
         * The limit of the number of responses, between 0 and 1000.
         */
        limit?: number,
        /**
         * Whether to return the member object for each action.
         */
        member?: boolean,
        /**
         * The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.
         */
        memberFields?: string,
        /**
         * Whether to return the memberCreator object for each action.
         */
        memberCreator?: boolean,
        /**
         * The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return
         */
        memberCreatorFields?: string,
        /**
         * The page of results for actions.
         */
        page?: number,
        /**
         * Whether to show reactions on comments or not.
         */
        reactions?: boolean,
        /**
         * An Action ID
         */
        before?: string,
        /**
         * An Action ID
         */
        since?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{boardId}/actions',
            path: {
                'boardId': boardId,
            },
            query: {
                'fields': fields,
                'filter': filter,
                'format': format,
                'idModels': idModels,
                'limit': limit,
                'member': member,
                'member_fields': memberFields,
                'memberCreator': memberCreator,
                'memberCreator_fields': memberCreatorFields,
                'page': page,
                'reactions': reactions,
                'before': before,
                'since': since,
            },
        });
    }

    /**
     * Get a Card on a Board
     * Get a single Card on a Board.
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdCardsIdcard({
        id,
        idCard,
        fields,
        filter,
        format = 'list',
        idModels,
        limit = 50,
        member = true,
        memberFields = 'activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username',
        memberCreator = true,
        memberCreatorFields = 'activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username',
        page,
        reactions,
        before,
        since,
    }: {
        /**
         * The ID of the board
         */
        id: string,
        /**
         * The id the card to retrieve.
         */
        idCard: string,
        /**
         * The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object).
         */
        fields?: Action,
        /**
         * A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/).
         */
        filter?: string,
        /**
         * The format of the returned Actions. Either list or count.
         */
        format?: string,
        /**
         * A comma-separated list of idModels. Only actions related to these models will be returned.
         */
        idModels?: string,
        /**
         * The limit of the number of responses, between 0 and 1000.
         */
        limit?: number,
        /**
         * Whether to return the member object for each action.
         */
        member?: boolean,
        /**
         * The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.
         */
        memberFields?: string,
        /**
         * Whether to return the memberCreator object for each action.
         */
        memberCreator?: boolean,
        /**
         * The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return
         */
        memberCreatorFields?: string,
        /**
         * The page of results for actions.
         */
        page?: number,
        /**
         * Whether to show reactions on comments or not.
         */
        reactions?: boolean,
        /**
         * An Action ID
         */
        before?: string,
        /**
         * An Action ID
         */
        since?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{id}/cards/{idCard}',
            path: {
                'id': id,
                'idCard': idCard,
            },
            query: {
                'fields': fields,
                'filter': filter,
                'format': format,
                'idModels': idModels,
                'limit': limit,
                'member': member,
                'member_fields': memberFields,
                'memberCreator': memberCreator,
                'memberCreator_fields': memberCreatorFields,
                'page': page,
                'reactions': reactions,
                'before': before,
                'since': since,
            },
        });
    }

    /**
     * Get boardStars on a Board
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdBoardstars({
        boardId,
        filter = 'mine',
    }: {
        boardId: string,
        /**
         * Valid values: mine, none
         */
        filter?: string,
    }): CancelablePromise<Array<BoardStars>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{boardId}/boardStars',
            path: {
                'boardId': boardId,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * Get Checklists on a Board
     * Get all of the checklists on a Board.
     * @returns any Success
     * @throws ApiError
     */
    public boardsIdChecklists({
        id,
    }: {
        /**
         * The ID of the board
         */
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{id}/checklists',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get Cards on a Board
     * Get all of the open Cards on a Board.
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdCards({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{id}/cards',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get filtered Cards on a Board
     * Get the Cards on a Board that match a given filter.
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdCardsFilter({
        id,
        filter,
    }: {
        /**
         * ID of the Board
         */
        id: string,
        /**
         * Valid Values: all, closed, none, open, visible.
         */
        filter: 'all' | 'closed' | 'none' | 'open' | 'visible',
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{id}/cards/{filter}',
            path: {
                'id': id,
                'filter': filter,
            },
        });
    }

    /**
     * Get Custom Fields for Board
     * Get the Custom Field Definitions that exist on a board.
     * @returns CustomField Success
     * @throws ApiError
     */
    public getBoardsIdCustomfields({
        id,
    }: {
        /**
         * The ID of the board
         */
        id: TrelloID,
    }): CancelablePromise<Array<CustomField>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{id}/customFields',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get Labels on a Board
     * Get all of the Labels on a Board.
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdLabels({
        id,
        fields,
        limit = 50,
    }: {
        /**
         * The ID of the Board.
         */
        id: TrelloID,
        /**
         * The fields to be returned for the Labels.
         */
        fields?: Label,
        /**
         * The number of Labels to be returned.
         */
        limit?: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{id}/labels',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'limit': limit,
            },
        });
    }

    /**
     * Create a Label on a Board
     * Create a new Label on a Board.
     * @returns any Success
     * @throws ApiError
     */
    public postBoardsIdLabels({
        id,
        name,
        color,
    }: {
        /**
         * The id of the board to update
         */
        id: string,
        /**
         * The name of the label to be created. 1 to 16384 characters long.
         */
        name: string,
        /**
         * Sets the color of the new label. Valid values are a label color or `null`.
         */
        color: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/boards/{id}/labels',
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
     * Get Lists on a Board
     * Get the Lists on a Board
     * @returns TrelloList Success
     * @throws ApiError
     */
    public getBoardsIdLists({
        id,
        cards,
        cardFields,
        filter,
        fields,
    }: {
        /**
         * The ID of the board
         */
        id: TrelloID,
        /**
         * Filter to apply to Cards.
         */
        cards?: ViewFilter,
        /**
         * `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/#card-object)
         */
        cardFields?: ('all' | Array<CardFields>),
        /**
         * Filter to apply to Lists
         */
        filter?: ViewFilter,
        /**
         * `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<ListFields>),
    }): CancelablePromise<Array<TrelloList>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{id}/lists',
            path: {
                'id': id,
            },
            query: {
                'cards': cards,
                'card_fields': cardFields,
                'filter': filter,
                'fields': fields,
            },
        });
    }

    /**
     * Create a List on a Board
     * Create a new List on a Board.
     * @returns TrelloList Success
     * @throws ApiError
     */
    public postBoardsIdLists({
        id,
        name,
        pos = 'top',
    }: {
        /**
         * The ID of the board
         */
        id: TrelloID,
        /**
         * The name of the list to be created. 1 to 16384 characters long.
         */
        name: string,
        /**
         * Determines the position of the list. Valid values: `top`, `bottom`, or a positive number.
         */
        pos?: string,
    }): CancelablePromise<TrelloList> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/boards/{id}/lists',
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
     * Get filtered Lists on a Board
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdListsFilter({
        id,
        filter,
    }: {
        /**
         * The ID of the board
         */
        id: TrelloID,
        /**
         * One of `all`, `closed`, `none`, `open`
         */
        filter: ViewFilter,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{id}/lists/{filter}',
            path: {
                'id': id,
                'filter': filter,
            },
        });
    }

    /**
     * Get the Members of a Board
     * Get the Members for a board
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdMembers({
        id,
    }: {
        /**
         * The ID of the board
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{id}/members',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Invite Member to Board via email
     * Invite a Member to a Board via their email address.
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMembers({
        id,
        email,
        type = 'normal',
        requestBody,
    }: {
        /**
         * The ID of the board
         */
        id: TrelloID,
        /**
         * The email address of a user to add as a member of the board.
         */
        email: string,
        /**
         * Valid values: admin, normal, observer. Determines what type of member the user being added should be of the board.
         */
        type?: 'admin' | 'normal' | 'observer',
        requestBody?: {
            /**
             * The full name of the user to as a member of the board. Must have a length of at least 1 and cannot begin nor end with a space.
             */
            fullName?: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/boards/{id}/members',
            path: {
                'id': id,
            },
            query: {
                'email': email,
                'type': type,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Add a Member to a Board
     * Add a member to the board.
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMembersIdmember({
        id,
        idMember,
        type,
        allowBillableGuest = false,
    }: {
        /**
         * The id of the board to update
         */
        id: TrelloID,
        /**
         * The id of the member to add to the board.
         */
        idMember: TrelloID,
        /**
         * One of: admin, normal, observer. Determines the type of member this user will be on the board.
         */
        type: 'admin' | 'normal' | 'observer',
        /**
         * Optional param that allows organization admins to add multi-board guests onto a board.
         */
        allowBillableGuest?: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/boards/{id}/members/{idMember}',
            path: {
                'id': id,
                'idMember': idMember,
            },
            query: {
                'type': type,
                'allowBillableGuest': allowBillableGuest,
            },
        });
    }

    /**
     * Remove Member from Board
     * @returns any Success
     * @throws ApiError
     */
    public boardsidmembersidmember({
        id,
        idMember,
    }: {
        /**
         * The id of the board to update
         */
        id: TrelloID,
        /**
         * The id of the member to add to the board.
         */
        idMember: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/boards/{id}/members/{idMember}',
            path: {
                'id': id,
                'idMember': idMember,
            },
        });
    }

    /**
     * Update Membership of Member on a Board
     * Update an existing board by id
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMembershipsIdmembership({
        id,
        idMembership,
        type,
        memberFields = 'all',
    }: {
        /**
         * The id of the board to update
         */
        id: TrelloID,
        /**
         * The id of a membership that should be added to this board.
         */
        idMembership: TrelloID,
        /**
         * One of: admin, normal, observer. Determines the type of member that this membership will be to this board.
         */
        type: 'admin' | 'normal' | 'observer',
        /**
         * Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username
         */
        memberFields?: 'all' | 'avatarHash' | 'bio' | 'bioData' | 'confirmed' | 'fullName' | 'idPremOrgsAdmin' | 'initials' | 'memberType' | 'products' | 'status' | 'url' | 'username',
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/boards/{id}/memberships/{idMembership}',
            path: {
                'id': id,
                'idMembership': idMembership,
            },
            query: {
                'type': type,
                'member_fields': memberFields,
            },
        });
    }

    /**
     * Update emailPosition Pref on a Board
     * Update emailPosition Pref on a Board
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMyprefsEmailposition({
        id,
        value,
    }: {
        /**
         * The id of the board to update
         */
        id: TrelloID,
        /**
         * Valid values: bottom, top. Determines the position of the email address.
         */
        value: 'bottom' | 'top',
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/boards/{id}/myPrefs/emailPosition',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Update idEmailList Pref on a Board
     * Change the default list that email-to-board cards are created in.
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMyprefsIdemaillist({
        id,
        value,
    }: {
        /**
         * The id of the board to update
         */
        id: TrelloID,
        /**
         * The id of an email list.
         */
        value: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/boards/{id}/myPrefs/idEmailList',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Update showListGuide Pref on a Board
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMyPrefsShowlistguide({
        id,
        value,
    }: {
        /**
         * The id of the board to update
         */
        id: TrelloID,
        /**
         * Determines whether to show the list guide.
         */
        value: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/boards/{id}/myPrefs/showListGuide',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Update showSidebar Pref on a Board
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMyPrefsShowsidebar({
        id,
        value,
    }: {
        /**
         * The id of the board to update
         */
        id: TrelloID,
        /**
         * Determines whether to show the side bar.
         */
        value: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/boards/{id}/myPrefs/showSidebar',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Update showSidebarActivity Pref on a Board
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMyPrefsShowsidebaractivity({
        id,
        value,
    }: {
        /**
         * The id of the board to update
         */
        id: TrelloID,
        /**
         * Determines whether to show sidebar activity.
         */
        value: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/boards/{id}/myPrefs/showSidebarActivity',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Update showSidebarBoardActions Pref on a Board
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMyPrefsShowsidebarboardactions({
        id,
        value,
    }: {
        /**
         * The id of the board to update
         */
        id: TrelloID,
        /**
         * Determines whether to show the sidebar board actions.
         */
        value: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/boards/{id}/myPrefs/showSidebarBoardActions',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Update showSidebarMembers Pref on a Board
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMyPrefsShowsidebarmembers({
        id,
        value,
    }: {
        /**
         * The id of the board to update
         */
        id: TrelloID,
        /**
         * Determines whether to show members of the board in the sidebar.
         */
        value: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/boards/{id}/myPrefs/showSidebarMembers',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Create a Board
     * Create a new board.
     * @returns any Success
     * @throws ApiError
     */
    public postBoards({
        name,
        defaultLabels = true,
        defaultLists = true,
        desc,
        idOrganization,
        idBoardSource,
        keepFromSource = 'none',
        powerUps,
        prefsPermissionLevel = 'private',
        prefsVoting = 'disabled',
        prefsComments = 'members',
        prefsInvitations = 'members',
        prefsSelfJoin = true,
        prefsCardCovers = true,
        prefsBackground = 'blue',
        prefsCardAging = 'regular',
    }: {
        /**
         * The new name for the board. 1 to 16384 characters long.
         */
        name: string,
        /**
         * Determines whether to use the default set of labels.
         */
        defaultLabels?: boolean,
        /**
         * Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if `idBoardSource` is provided.
         */
        defaultLists?: boolean,
        /**
         * A new description for the board, 0 to 16384 characters long
         */
        desc?: string,
        /**
         * The id or name of the Workspace the board should belong to.
         */
        idOrganization?: TrelloID,
        /**
         * The id of a board to copy into the new board.
         */
        idBoardSource?: TrelloID,
        /**
         * To keep cards from the original board pass in the value `cards`
         */
        keepFromSource?: 'cards' | 'none',
        /**
         * The Power-Ups that should be enabled on the new board. One of: `all`, `calendar`, `cardAging`, `recap`, `voting`.
         */
        powerUps?: 'all' | 'calendar' | 'cardAging' | 'recap' | 'voting',
        /**
         * The permissions level of the board. One of: `org`, `private`, `public`.
         */
        prefsPermissionLevel?: 'org' | 'private' | 'public',
        /**
         * Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`.
         */
        prefsVoting?: 'disabled' | 'members' | 'observers' | 'org' | 'public',
        /**
         * Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`.
         */
        prefsComments?: 'disabled' | 'members' | 'observers' | 'org' | 'public',
        /**
         * Determines what types of members can invite users to join. One of: `admins`, `members`.
         */
        prefsInvitations?: 'members' | 'admins',
        /**
         * Determines whether users can join the boards themselves or whether they have to be invited.
         */
        prefsSelfJoin?: boolean,
        /**
         * Determines whether card covers are enabled.
         */
        prefsCardCovers?: boolean,
        /**
         * The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`.
         */
        prefsBackground?: 'blue' | 'orange' | 'green' | 'red' | 'purple' | 'pink' | 'lime' | 'sky' | 'grey',
        /**
         * Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`, `regular`.
         */
        prefsCardAging?: 'pirate' | 'regular',
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/boards/',
            query: {
                'name': name,
                'defaultLabels': defaultLabels,
                'defaultLists': defaultLists,
                'desc': desc,
                'idOrganization': idOrganization,
                'idBoardSource': idBoardSource,
                'keepFromSource': keepFromSource,
                'powerUps': powerUps,
                'prefs_permissionLevel': prefsPermissionLevel,
                'prefs_voting': prefsVoting,
                'prefs_comments': prefsComments,
                'prefs_invitations': prefsInvitations,
                'prefs_selfJoin': prefsSelfJoin,
                'prefs_cardCovers': prefsCardCovers,
                'prefs_background': prefsBackground,
                'prefs_cardAging': prefsCardAging,
            },
        });
    }

    /**
     * Create a calendarKey for a Board
     * Create a new board.
     * @returns any Success
     * @throws ApiError
     */
    public postBoardsIdCalendarkeyGenerate({
        id,
    }: {
        /**
         * The id of the board to update
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/boards/{id}/calendarKey/generate',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create a emailKey for a Board
     * @returns any Success
     * @throws ApiError
     */
    public postBoardsIdEmailkeyGenerate({
        id,
    }: {
        /**
         * The id of the board to update
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/boards/{id}/emailKey/generate',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create a Tag for a Board
     * @returns any Success
     * @throws ApiError
     */
    public postBoardsIdIdtags({
        id,
        value,
    }: {
        /**
         * The id of the board to update
         */
        id: TrelloID,
        /**
         * The id of a tag from the organization to which this board belongs.
         */
        value: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/boards/{id}/idTags',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Mark Board as viewed
     * @returns any Success
     * @throws ApiError
     */
    public postBoardsIdMarkedasviewed({
        id,
    }: {
        /**
         * The id of the board to update
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/boards/{id}/markedAsViewed',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get Enabled Power-Ups on Board
     * Get the enabled Power-Ups on a board
     * @returns Plugin Success
     * @throws ApiError
     */
    public getBoardsIdBoardplugins({
        id,
    }: {
        /**
         * The ID of the Board
         */
        id: TrelloID,
    }): CancelablePromise<Array<Plugin>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{id}/boardPlugins',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @deprecated
     * Enable a Power-Up on a Board
     * Enable a Power-Up on a Board
     * @returns any Success
     * @throws ApiError
     */
    public postBoardsIdBoardplugins({
        id,
        idPlugin,
    }: {
        /**
         * The ID of the Board
         */
        id: TrelloID,
        /**
         * The ID of the Power-Up to enable
         */
        idPlugin?: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/boards/{id}/boardPlugins',
            path: {
                'id': id,
            },
            query: {
                'idPlugin': idPlugin,
            },
        });
    }

    /**
     * @deprecated
     * Disable a Power-Up on a Board
     * Disable a Power-Up on a board
     * @returns any Success
     * @throws ApiError
     */
    public deleteBoardsIdBoardplugins({
        id,
        idPlugin,
    }: {
        /**
         * The ID of the board
         */
        id: TrelloID,
        /**
         * The ID of the Power-Up to disable
         */
        idPlugin: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/boards/{id}/boardPlugins/{idPlugin}',
            path: {
                'id': id,
                'idPlugin': idPlugin,
            },
        });
    }

    /**
     * Get Power-Ups on a Board
     * List the Power-Ups on a board
     * @returns Plugin Success
     * @throws ApiError
     */
    public getBoardIdPlugins({
        id,
        filter = 'enabled',
    }: {
        /**
         * The ID of the board
         */
        id: TrelloID,
        /**
         * One of: `enabled` or `available`
         */
        filter?: 'enabled' | 'available',
    }): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/boards/{id}/plugins',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
            },
        });
    }

}
