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
     * @param id The ID of the board
     * @param filter One of `admins`, `all`, `none`, `normal`
     * @param activity Works for premium organizations only.
     * @param orgMemberType Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`.
     * @param member Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/).
     * @param memberFields Fields to show if `member=true`. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/).
     * @returns Memberships Success
     * @throws ApiError
     */
    public getBoardsIdMemberships(
        id: TrelloID,
        filter: 'admins' | 'all' | 'none' | 'normal' = 'all',
        activity: boolean = false,
        orgMemberType: boolean = false,
        member: boolean = false,
        memberFields: MemberFields = 'fullname,username',
    ): CancelablePromise<Memberships> {
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
     * @param id
     * @param actions This is a nested resource. Read more about actions as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param boardStars Valid values are one of: `mine` or `none`.
     * @param cards This is a nested resource. Read more about cards as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param cardPluginData Use with the `cards` param to include card pluginData with the response
     * @param checklists This is a nested resource. Read more about checklists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param customFields This is a nested resource. Read more about custom fields as nested resources [here](#custom-fields-nested-resource).
     * @param fields The fields of the board to be included in the response. Valid values: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url
     * @param labels This is a nested resource. Read more about labels as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param lists This is a nested resource. Read more about lists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param members This is a nested resource. Read more about members as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param memberships This is a nested resource. Read more about memberships as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param pluginData Determines whether the pluginData for this board should be returned. Valid values: true or false.
     * @param organization This is a nested resource. Read more about organizations as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).
     * @param organizationPluginData Use with the `organization` param to include organization pluginData with the response
     * @param myPrefs
     * @param tags Also known as collections, tags, refer to the collection(s) that a Board belongs to.
     * @returns Board Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public getBoardsId(
        id: TrelloID,
        actions: string = 'all',
        boardStars: string = 'none',
        cards: string = 'none',
        cardPluginData: boolean = false,
        checklists: string = 'none',
        customFields: boolean = false,
        fields: string = 'name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames',
        labels?: string,
        lists: string = 'open',
        members: string = 'none',
        memberships: string = 'none',
        pluginData: boolean = false,
        organization: boolean = false,
        organizationPluginData: boolean = false,
        myPrefs: boolean = false,
        tags: boolean = false,
    ): CancelablePromise<Board | Error> {
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
     * @param id
     * @param name The new name for the board. 1 to 16384 characters long.
     * @param desc A new description for the board, 0 to 16384 characters long
     * @param closed Whether the board is closed
     * @param subscribed Whether the acting user is subscribed to the board
     * @param idOrganization The id of the Workspace the board should be moved to
     * @param prefsPermissionLevel One of: org, private, public
     * @param prefsSelfJoin Whether Workspace members can join the board themselves
     * @param prefsCardCovers Whether card covers should be displayed on this board
     * @param prefsHideVotes Determines whether the Voting Power-Up should hide who voted on cards or not.
     * @param prefsInvitations Who can invite people to this board. One of: admins, members
     * @param prefsVoting Who can vote on this board. One of disabled, members, observers, org, public
     * @param prefsComments Who can comment on cards on this board. One of: disabled, members, observers, org, public
     * @param prefsBackground The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey
     * @param prefsCardAging One of: pirate, regular
     * @param prefsCalendarFeedEnabled Determines whether the calendar feed is enabled or not.
     * @param labelNamesGreen Name for the green label. 1 to 16384 characters long
     * @param labelNamesYellow Name for the yellow label. 1 to 16384 characters long
     * @param labelNamesOrange Name for the orange label. 1 to 16384 characters long
     * @param labelNamesRed Name for the red label. 1 to 16384 characters long
     * @param labelNamesPurple Name for the purple label. 1 to 16384 characters long
     * @param labelNamesBlue Name for the blue label. 1 to 16384 characters long
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsId(
        id: TrelloID,
        name?: string,
        desc?: string,
        closed?: boolean,
        subscribed?: TrelloID,
        idOrganization?: string,
        prefsPermissionLevel?: string,
        prefsSelfJoin?: boolean,
        prefsCardCovers?: boolean,
        prefsHideVotes?: boolean,
        prefsInvitations?: string,
        prefsVoting?: string,
        prefsComments?: string,
        prefsBackground?: string,
        prefsCardAging?: string,
        prefsCalendarFeedEnabled?: boolean,
        labelNamesGreen?: string,
        labelNamesYellow?: string,
        labelNamesOrange?: string,
        labelNamesRed?: string,
        labelNamesPurple?: string,
        labelNamesBlue?: string,
    ): CancelablePromise<any> {
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
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public deleteBoardsId(
        id: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the board.
     * @param field The field you'd like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdField(
        id: string,
        field: string,
    ): CancelablePromise<any> {
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
     * @param boardId
     * @param fields The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object).
     * @param filter A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/).
     * @param format The format of the returned Actions. Either list or count.
     * @param idModels A comma-separated list of idModels. Only actions related to these models will be returned.
     * @param limit The limit of the number of responses, between 0 and 1000.
     * @param member Whether to return the member object for each action.
     * @param memberFields The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.
     * @param memberCreator Whether to return the memberCreator object for each action.
     * @param memberCreatorFields The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return
     * @param page The page of results for actions.
     * @param reactions Whether to show reactions on comments or not.
     * @param before An Action ID
     * @param since An Action ID
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdActions(
        boardId: string,
        fields?: Action,
        filter?: string,
        format: string = 'list',
        idModels?: string,
        limit: number = 50,
        member: boolean = true,
        memberFields: string = 'activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username',
        memberCreator: boolean = true,
        memberCreatorFields: string = 'activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username',
        page?: number,
        reactions?: boolean,
        before?: string,
        since?: string,
    ): CancelablePromise<any> {
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
     * @param id The ID of the board
     * @param idCard The id the card to retrieve.
     * @param fields The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object).
     * @param filter A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/).
     * @param format The format of the returned Actions. Either list or count.
     * @param idModels A comma-separated list of idModels. Only actions related to these models will be returned.
     * @param limit The limit of the number of responses, between 0 and 1000.
     * @param member Whether to return the member object for each action.
     * @param memberFields The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.
     * @param memberCreator Whether to return the memberCreator object for each action.
     * @param memberCreatorFields The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return
     * @param page The page of results for actions.
     * @param reactions Whether to show reactions on comments or not.
     * @param before An Action ID
     * @param since An Action ID
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdCardsIdcard(
        id: string,
        idCard: string,
        fields?: Action,
        filter?: string,
        format: string = 'list',
        idModels?: string,
        limit: number = 50,
        member: boolean = true,
        memberFields: string = 'activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username',
        memberCreator: boolean = true,
        memberCreatorFields: string = 'activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username',
        page?: number,
        reactions?: boolean,
        before?: string,
        since?: string,
    ): CancelablePromise<any> {
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
     * @param boardId
     * @param filter Valid values: mine, none
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdBoardstars(
        boardId: string,
        filter: string = 'mine',
    ): CancelablePromise<Array<BoardStars>> {
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
     * @param id The ID of the board
     * @returns any Success
     * @throws ApiError
     */
    public boardsIdChecklists(
        id: string,
    ): CancelablePromise<any> {
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
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdCards(
        id: string,
    ): CancelablePromise<any> {
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
     * @param id ID of the Board
     * @param filter Valid Values: all, closed, none, open, visible.
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdCardsFilter(
        id: string,
        filter: 'all' | 'closed' | 'none' | 'open' | 'visible',
    ): CancelablePromise<any> {
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
     * @param id The ID of the board
     * @returns CustomField Success
     * @throws ApiError
     */
    public getBoardsIdCustomfields(
        id: TrelloID,
    ): CancelablePromise<Array<CustomField>> {
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
     * @param id The ID of the Board.
     * @param fields The fields to be returned for the Labels.
     * @param limit The number of Labels to be returned.
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdLabels(
        id: TrelloID,
        fields?: Label,
        limit: number = 50,
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @param name The name of the label to be created. 1 to 16384 characters long.
     * @param color Sets the color of the new label. Valid values are a label color or `null`.
     * @returns any Success
     * @throws ApiError
     */
    public postBoardsIdLabels(
        id: string,
        name: string,
        color: string,
    ): CancelablePromise<any> {
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
     * @param id The ID of the board
     * @param cards Filter to apply to Cards.
     * @param cardFields `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/#card-object)
     * @param filter Filter to apply to Lists
     * @param fields `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns TrelloList Success
     * @throws ApiError
     */
    public getBoardsIdLists(
        id: TrelloID,
        cards?: ViewFilter,
        cardFields?: ('all' | Array<CardFields>),
        filter?: ViewFilter,
        fields?: ('all' | Array<ListFields>),
    ): CancelablePromise<Array<TrelloList>> {
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
     * @param id The ID of the board
     * @param name The name of the list to be created. 1 to 16384 characters long.
     * @param pos Determines the position of the list. Valid values: `top`, `bottom`, or a positive number.
     * @returns TrelloList Success
     * @throws ApiError
     */
    public postBoardsIdLists(
        id: TrelloID,
        name: string,
        pos: string = 'top',
    ): CancelablePromise<TrelloList> {
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
     * @param id The ID of the board
     * @param filter One of `all`, `closed`, `none`, `open`
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdListsFilter(
        id: TrelloID,
        filter: ViewFilter,
    ): CancelablePromise<any> {
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
     * @param id The ID of the board
     * @returns any Success
     * @throws ApiError
     */
    public getBoardsIdMembers(
        id: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the board
     * @param email The email address of a user to add as a member of the board.
     * @param type Valid values: admin, normal, observer. Determines what type of member the user being added should be of the board.
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMembers(
        id: TrelloID,
        email: string,
        type: 'admin' | 'normal' | 'observer' = 'normal',
        requestBody?: {
            /**
             * The full name of the user to as a member of the board. Must have a length of at least 1 and cannot begin nor end with a space.
             */
            fullName?: string;
        },
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @param idMember The id of the member to add to the board.
     * @param type One of: admin, normal, observer. Determines the type of member this user will be on the board.
     * @param allowBillableGuest Optional param that allows organization admins to add multi-board guests onto a board.
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMembersIdmember(
        id: TrelloID,
        idMember: TrelloID,
        type: 'admin' | 'normal' | 'observer',
        allowBillableGuest: boolean = false,
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @param idMember The id of the member to add to the board.
     * @returns any Success
     * @throws ApiError
     */
    public boardsidmembersidmember(
        id: TrelloID,
        idMember: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @param idMembership The id of a membership that should be added to this board.
     * @param type One of: admin, normal, observer. Determines the type of member that this membership will be to this board.
     * @param memberFields Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMembershipsIdmembership(
        id: TrelloID,
        idMembership: TrelloID,
        type: 'admin' | 'normal' | 'observer',
        memberFields: 'all' | 'avatarHash' | 'bio' | 'bioData' | 'confirmed' | 'fullName' | 'idPremOrgsAdmin' | 'initials' | 'memberType' | 'products' | 'status' | 'url' | 'username' = 'fullName, username',
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @param value Valid values: bottom, top. Determines the position of the email address.
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMyprefsEmailposition(
        id: TrelloID,
        value: 'bottom' | 'top',
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @param value The id of an email list.
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMyprefsIdemaillist(
        id: TrelloID,
        value: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @param value Determines whether to show the list guide.
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMyPrefsShowlistguide(
        id: TrelloID,
        value: boolean,
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @param value Determines whether to show the side bar.
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMyPrefsShowsidebar(
        id: TrelloID,
        value: boolean,
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @param value Determines whether to show sidebar activity.
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMyPrefsShowsidebaractivity(
        id: TrelloID,
        value: boolean,
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @param value Determines whether to show the sidebar board actions.
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMyPrefsShowsidebarboardactions(
        id: TrelloID,
        value: boolean,
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @param value Determines whether to show members of the board in the sidebar.
     * @returns any Success
     * @throws ApiError
     */
    public putBoardsIdMyPrefsShowsidebarmembers(
        id: TrelloID,
        value: boolean,
    ): CancelablePromise<any> {
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
     * @param name The new name for the board. 1 to 16384 characters long.
     * @param defaultLabels Determines whether to use the default set of labels.
     * @param defaultLists Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if `idBoardSource` is provided.
     * @param desc A new description for the board, 0 to 16384 characters long
     * @param idOrganization The id or name of the Workspace the board should belong to.
     * @param idBoardSource The id of a board to copy into the new board.
     * @param keepFromSource To keep cards from the original board pass in the value `cards`
     * @param powerUps The Power-Ups that should be enabled on the new board. One of: `all`, `calendar`, `cardAging`, `recap`, `voting`.
     * @param prefsPermissionLevel The permissions level of the board. One of: `org`, `private`, `public`.
     * @param prefsVoting Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`.
     * @param prefsComments Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`.
     * @param prefsInvitations Determines what types of members can invite users to join. One of: `admins`, `members`.
     * @param prefsSelfJoin Determines whether users can join the boards themselves or whether they have to be invited.
     * @param prefsCardCovers Determines whether card covers are enabled.
     * @param prefsBackground The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`.
     * @param prefsCardAging Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`, `regular`.
     * @returns any Success
     * @throws ApiError
     */
    public postBoards(
        name: string,
        defaultLabels: boolean = true,
        defaultLists: boolean = true,
        desc?: string,
        idOrganization?: TrelloID,
        idBoardSource?: TrelloID,
        keepFromSource: 'cards' | 'none' = 'none',
        powerUps?: 'all' | 'calendar' | 'cardAging' | 'recap' | 'voting',
        prefsPermissionLevel: 'org' | 'private' | 'public' = 'private',
        prefsVoting: 'disabled' | 'members' | 'observers' | 'org' | 'public' = 'disabled',
        prefsComments: 'disabled' | 'members' | 'observers' | 'org' | 'public' = 'members',
        prefsInvitations: 'members' | 'admins' = 'members',
        prefsSelfJoin: boolean = true,
        prefsCardCovers: boolean = true,
        prefsBackground: 'blue' | 'orange' | 'green' | 'red' | 'purple' | 'pink' | 'lime' | 'sky' | 'grey' = 'blue',
        prefsCardAging: 'pirate' | 'regular' = 'regular',
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @returns any Success
     * @throws ApiError
     */
    public postBoardsIdCalendarkeyGenerate(
        id: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @returns any Success
     * @throws ApiError
     */
    public postBoardsIdEmailkeyGenerate(
        id: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @param value The id of a tag from the organization to which this board belongs.
     * @returns any Success
     * @throws ApiError
     */
    public postBoardsIdIdtags(
        id: TrelloID,
        value: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The id of the board to update
     * @returns any Success
     * @throws ApiError
     */
    public postBoardsIdMarkedasviewed(
        id: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the Board
     * @returns Plugin Success
     * @throws ApiError
     */
    public getBoardsIdBoardplugins(
        id: TrelloID,
    ): CancelablePromise<Array<Plugin>> {
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
     * @param id The ID of the Board
     * @param idPlugin The ID of the Power-Up to enable
     * @returns any Success
     * @throws ApiError
     */
    public postBoardsIdBoardplugins(
        id: TrelloID,
        idPlugin?: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the board
     * @param idPlugin The ID of the Power-Up to disable
     * @returns any Success
     * @throws ApiError
     */
    public deleteBoardsIdBoardplugins(
        id: TrelloID,
        idPlugin: TrelloID,
    ): CancelablePromise<any> {
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
     * @param id The ID of the board
     * @param filter One of: `enabled` or `available`
     * @returns Plugin Success
     * @throws ApiError
     */
    public getBoardIdPlugins(
        id: TrelloID,
        filter: 'enabled' | 'available' = 'enabled',
    ): CancelablePromise<Plugin> {
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
