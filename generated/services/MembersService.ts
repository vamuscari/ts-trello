/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlockedKey } from '../models/BlockedKey';
import type { Board } from '../models/Board';
import type { BoardBackground } from '../models/BoardBackground';
import type { BoardFields } from '../models/BoardFields';
import type { BoardStars } from '../models/BoardStars';
import type { Card } from '../models/Card';
import type { Channel } from '../models/Channel';
import type { CustomEmoji } from '../models/CustomEmoji';
import type { CustomSticker } from '../models/CustomSticker';
import type { Member } from '../models/Member';
import type { MemberFields } from '../models/MemberFields';
import type { Notification } from '../models/Notification';
import type { NotificationChannelSettings } from '../models/NotificationChannelSettings';
import type { NotificationFields } from '../models/NotificationFields';
import type { Organization } from '../models/Organization';
import type { OrganizationFields } from '../models/OrganizationFields';
import type { posStringOrNumber } from '../models/posStringOrNumber';
import type { SavedSearch } from '../models/SavedSearch';
import type { Token } from '../models/Token';
import type { TrelloID } from '../models/TrelloID';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MembersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a Member
     * Get a member
     * @param id The ID or username of the member
     * @param actions See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)
     * @param boards See the [Boards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#boards-nested-resource)
     * @param boardBackgrounds One of: `all`, `custom`, `default`, `none`, `premium`
     * @param boardsInvited `all` or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned
     * @param boardsInvitedFields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param boardStars Whether to return the boardStars or not
     * @param cards See the [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource) for additional options
     * @param customBoardBackgrounds `all` or `none`
     * @param customEmoji `all` or `none`
     * @param customStickers `all` or `none`
     * @param fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param notifications See the [Notifications Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#notifications-nested-resource)
     * @param organizations One of: `all`, `members`, `none`, `public`
     * @param organizationFields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param organizationPaidAccount Whether or not to include paid account information in the returned workspace object
     * @param organizationsInvited One of: `all`, `members`, `none`, `public`
     * @param organizationsInvitedFields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param paidAccount Whether or not to include paid account information in the returned member object
     * @param savedSearches
     * @param tokens `all` or `none`
     * @returns any Success
     * @throws ApiError
     */
    public getMembersId(
        id: (TrelloID | string),
        actions?: string,
        boards?: string,
        boardBackgrounds: 'all' | 'custom' | 'default' | 'none' | 'premium' = 'none',
        boardsInvited?: ('all' | Array<'closed' | 'members' | 'open' | 'organization' | 'pinned' | 'public' | 'starred' | 'unpinned'>),
        boardsInvitedFields?: ('all' | Array<BoardFields>),
        boardStars: boolean = false,
        cards: string = 'none',
        customBoardBackgrounds: 'all' | 'none' = 'none',
        customEmoji: 'all' | 'none' = 'none',
        customStickers: 'all' | 'none' = 'none',
        fields?: ('all' | Array<MemberFields>),
        notifications?: string,
        organizations: 'all' | 'members' | 'none' | 'public' = 'none',
        organizationFields?: ('all' | Array<OrganizationFields>),
        organizationPaidAccount: boolean = false,
        organizationsInvited: 'all' | 'members' | 'none' | 'public' = 'none',
        organizationsInvitedFields?: ('all' | Array<OrganizationFields>),
        paidAccount: boolean = false,
        savedSearches: boolean = false,
        tokens: 'all' | 'none' = 'none',
    ): CancelablePromise<Member> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}',
            path: {
                'id': id,
            },
            query: {
                'actions': actions,
                'boards': boards,
                'boardBackgrounds': boardBackgrounds,
                'boardsInvited': boardsInvited,
                'boardsInvited_fields': boardsInvitedFields,
                'boardStars': boardStars,
                'cards': cards,
                'customBoardBackgrounds': customBoardBackgrounds,
                'customEmoji': customEmoji,
                'customStickers': customStickers,
                'fields': fields,
                'notifications': notifications,
                'organizations': organizations,
                'organization_fields': organizationFields,
                'organization_paid_account': organizationPaidAccount,
                'organizationsInvited': organizationsInvited,
                'organizationsInvited_fields': organizationsInvitedFields,
                'paid_account': paidAccount,
                'savedSearches': savedSearches,
                'tokens': tokens,
            },
        });
    }

    /**
     * Update a Member
     * Update a Member
     * @param id The ID or username of the member
     * @param fullName New name for the member. Cannot begin or end with a space.
     * @param initials New initials for the member. 1-4 characters long.
     * @param username New username for the member. At least 3 characters long, only lowercase letters, underscores, and numbers. Must be unique.
     * @param bio
     * @param avatarSource One of: `gravatar`, `none`, `upload`
     * @param prefsColorBlind
     * @param prefsLocale
     * @param prefsMinutesBetweenSummaries `-1` for disabled, `1`, or `60`
     * @returns any Success
     * @throws ApiError
     */
    public putMembersId(
        id: TrelloID,
        fullName?: string,
        initials?: string,
        username?: string,
        bio?: string,
        avatarSource?: 'gravatar' | 'none' | 'upload',
        prefsColorBlind?: boolean,
        prefsLocale?: string,
        prefsMinutesBetweenSummaries?: number,
    ): CancelablePromise<Member> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/members/{id}',
            path: {
                'id': id,
            },
            query: {
                'fullName': fullName,
                'initials': initials,
                'username': username,
                'bio': bio,
                'avatarSource': avatarSource,
                'prefs/colorBlind': prefsColorBlind,
                'prefs/locale': prefsLocale,
                'prefs/minutesBetweenSummaries': prefsMinutesBetweenSummaries,
            },
        });
    }

    /**
     * Get a field on a Member
     * Get a particular property of a member
     * @param id The ID or username of the member
     * @param field One of the member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getMembersIdField(
        id: TrelloID,
        field: MemberFields,
    ): CancelablePromise<Member> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/{field}',
            path: {
                'id': id,
                'field': field,
            },
        });
    }

    /**
     * Get a Member's Actions
     * List the actions for a member
     * @param id The ID or username of the member
     * @param filter A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
     * @returns any Success
     * @throws ApiError
     */
    public getMembersIdActions(
        id: TrelloID,
        filter?: string,
    ): CancelablePromise<Array<Member>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/actions',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * Get Member's custom Board backgrounds
     * Get a member's custom board backgrounds
     * @param id The ID or username of the member
     * @param filter One of: `all`, `custom`, `default`, `none`, `premium`
     * @returns any Success
     * @throws ApiError
     */
    public getMembersIdBoardbackgrounds(
        id: TrelloID,
        filter: 'all' | 'custom' | 'default' | 'none' | 'premium' = 'all',
    ): CancelablePromise<Array<BoardBackground>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/boardBackgrounds',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * Upload new boardBackground for Member
     * Upload a new boardBackground
     * @param id The ID or username of the member
     * @param file
     * @returns any Success
     * @throws ApiError
     */
    public postMembersIdBoardbackgrounds1(
        id: TrelloID,
        file: Blob,
    ): CancelablePromise<Array<BoardBackground>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/members/{id}/boardBackgrounds',
            path: {
                'id': id,
            },
            query: {
                'file': file,
            },
        });
    }

    /**
     * Get a boardBackground of a Member
     * Get a member's board background
     * @param id The ID or username of the member
     * @param idBackground The ID of the board background
     * @param fields `all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile`
     * @returns BoardBackground Success
     * @throws ApiError
     */
    public getMembersIdBoardbackgroundsIdbackground(
        id: TrelloID,
        idBackground: TrelloID,
        fields?: ('all' | Array<'all' | 'brightness' | 'fullSizeUrl' | 'scaled' | 'tile'>),
    ): CancelablePromise<BoardBackground> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/boardBackgrounds/{idBackground}',
            path: {
                'id': id,
                'idBackground': idBackground,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Update a Member's custom Board background
     * Update a board background
     * @param id The ID or username of the member
     * @param idBackground The ID of the board background
     * @param brightness One of: `dark`, `light`, `unknown`
     * @param tile Whether the background should be tiled
     * @returns BoardBackground Success
     * @throws ApiError
     */
    public putMembersIdBoardbackgroundsIdbackground(
        id: TrelloID,
        idBackground: TrelloID,
        brightness?: 'dark' | 'light' | 'unknown',
        tile?: boolean,
    ): CancelablePromise<BoardBackground> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/members/{id}/boardBackgrounds/{idBackground}',
            path: {
                'id': id,
                'idBackground': idBackground,
            },
            query: {
                'brightness': brightness,
                'tile': tile,
            },
        });
    }

    /**
     * Delete a Member's custom Board background
     * Delete a board background
     * @param id The ID or username of the member
     * @param idBackground The ID of the board background
     * @returns any Success
     * @throws ApiError
     */
    public deleteMembersIdBoardbackgroundsIdbackground(
        id: TrelloID,
        idBackground: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/members/{id}/boardBackgrounds/{idBackground}',
            path: {
                'id': id,
                'idBackground': idBackground,
            },
        });
    }

    /**
     * Get a Member's boardStars
     * List a member's board stars
     * @param id The ID or username of the member
     * @returns any Success
     * @throws ApiError
     */
    public getMembersIdBoardstars(
        id: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/boardStars',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create Star for Board
     * Star a new board on behalf of a Member
     * @param id The ID or username of the member
     * @param idBoard The ID of the board to star
     * @param pos The position of the newly starred board. `top`, `bottom`, or a positive float.
     * @returns BoardStars Success
     * @throws ApiError
     */
    public postMembersIdBoardstars(
        id: (TrelloID | string),
        idBoard: TrelloID,
        pos: posStringOrNumber,
    ): CancelablePromise<Array<BoardStars>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/members/{id}/boardStars',
            path: {
                'id': id,
            },
            query: {
                'idBoard': idBoard,
                'pos': pos,
            },
        });
    }

    /**
     * Get a boardStar of Member
     * Get a specific boardStar
     * @param id The ID or username of the member
     * @param idStar The ID of the board star
     * @returns BoardStars Success
     * @throws ApiError
     */
    public getMembersIdBoardstarsIdstar(
        id: TrelloID,
        idStar: TrelloID,
    ): CancelablePromise<BoardStars> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/boardStars/{idStar}',
            path: {
                'id': id,
                'idStar': idStar,
            },
        });
    }

    /**
     * Update the position of a boardStar of Member
     * Update the position of a starred board
     * @param id The ID or username of the member
     * @param idStar The ID of the board star
     * @param pos New position for the starred board. `top`, `bottom`, or a positive float.
     * @returns any Success
     * @throws ApiError
     */
    public putMembersIdBoardstarsIdstar(
        id: TrelloID,
        idStar: TrelloID,
        pos?: posStringOrNumber,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/members/{id}/boardStars/{idStar}',
            path: {
                'id': id,
                'idStar': idStar,
            },
            query: {
                'pos': pos,
            },
        });
    }

    /**
     * Delete Star for Board
     * Unstar a board
     * @param id The ID or username of the member
     * @param idStar The ID of the board star
     * @returns any Success
     * @throws ApiError
     */
    public deleteMembersIdBoardstarsIdstar(
        id: TrelloID,
        idStar: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/members/{id}/boardStars/{idStar}',
            path: {
                'id': id,
                'idStar': idStar,
            },
        });
    }

    /**
     * Get Boards that Member belongs to
     * Lists the boards that the user is a member of.
     * @param id The ID or username of the member
     * @param filter `all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred`
     * @param fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param lists Which lists to include with the boards. One of: `all`, `closed`, `none`, `open`
     * @param organization Whether to include the Organization object with the Boards
     * @param organizationFields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns Board Success
     * @throws ApiError
     */
    public getMembersIdBoards(
        id: TrelloID,
        filter?: ('all' | Array<'all' | 'closed' | 'members' | 'open' | 'organization' | 'public' | 'starred'>),
        fields?: ('all' | Array<BoardFields>),
        lists: 'all' | 'closed' | 'none' | 'open' = 'none',
        organization: boolean = false,
        organizationFields?: ('all' | Array<OrganizationFields>),
    ): CancelablePromise<Array<Board>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/boards',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
                'fields': fields,
                'lists': lists,
                'organization': organization,
                'organization_fields': organizationFields,
            },
        });
    }

    /**
     * Get Boards the Member has been invited to
     * Get the boards the member has been invited to
     * @param id The ID or username of the member
     * @param fields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns Board Success
     * @throws ApiError
     */
    public getMembersIdBoardsinvited(
        id: TrelloID,
        fields?: ('all' | Array<BoardFields>),
    ): CancelablePromise<Array<Board>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/boardsInvited',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get Cards the Member is on
     * Gets the cards a member is on
     * @param id The ID or username of the member
     * @param filter One of: `all`, `closed`, `none`, `open`, `visible`
     * @returns Card Success
     * @throws ApiError
     */
    public getMembersIdCards(
        id: TrelloID,
        filter: 'all' | 'closed' | 'none' | 'open' | 'visible' = 'visible',
    ): CancelablePromise<Array<Card>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/cards',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * Get a Member's custom Board Backgrounds
     * Get a member's custom board backgrounds
     * @param id The ID or username of the member
     * @returns BoardBackground Success
     * @throws ApiError
     */
    public getMembersIdCustomboardbackgrounds(
        id: TrelloID,
    ): CancelablePromise<Array<BoardBackground>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/customBoardBackgrounds',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create a new custom Board Background
     * Upload a new custom board background
     * @param id The ID or username of the member
     * @param file
     * @returns BoardBackground Success
     * @throws ApiError
     */
    public membersidcustomboardbackgrounds1(
        id: TrelloID,
        file: Blob,
    ): CancelablePromise<BoardBackground> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/members/{id}/customBoardBackgrounds',
            path: {
                'id': id,
            },
            query: {
                'file': file,
            },
        });
    }

    /**
     * Get custom Board Background of Member
     * Get a specific custom board background
     * @param id The ID or username of the member
     * @param idBackground The ID of the custom background
     * @returns BoardBackground Success
     * @throws ApiError
     */
    public getMembersIdCustomboardbackgroundsIdbackground(
        id: (TrelloID | string),
        idBackground: TrelloID,
    ): CancelablePromise<BoardBackground> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/customBoardBackgrounds/{idBackground}',
            path: {
                'id': id,
                'idBackground': idBackground,
            },
        });
    }

    /**
     * Update custom Board Background of Member
     * Update a specific custom board background
     * @param id The ID or username of the member
     * @param idBackground The ID of the custom background
     * @param brightness One of: `dark`, `light`, `unknown`
     * @param tile Whether to tile the background
     * @returns BoardBackground Success
     * @throws ApiError
     */
    public putMembersIdCustomboardbackgroundsIdbackground(
        id: (TrelloID | string),
        idBackground: TrelloID,
        brightness?: 'dark' | 'light' | 'unknown',
        tile?: boolean,
    ): CancelablePromise<BoardBackground> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/members/{id}/customBoardBackgrounds/{idBackground}',
            path: {
                'id': id,
                'idBackground': idBackground,
            },
            query: {
                'brightness': brightness,
                'tile': tile,
            },
        });
    }

    /**
     * Delete custom Board Background of Member
     * Delete a specific custom board background
     * @param id The ID or username of the member
     * @param idBackground The ID of the custom background
     * @returns any Success
     * @throws ApiError
     */
    public deleteMembersIdCustomboardbackgroundsIdbackground(
        id: (TrelloID | string),
        idBackground: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/members/{id}/customBoardBackgrounds/{idBackground}',
            path: {
                'id': id,
                'idBackground': idBackground,
            },
        });
    }

    /**
     * Get a Member's customEmojis
     * Get a Member's uploaded custom Emojis
     * @param id The ID or username of the member
     * @returns CustomEmoji Success
     * @throws ApiError
     */
    public getMembersIdCustomemoji(
        id: TrelloID,
    ): CancelablePromise<Array<CustomEmoji>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/customEmoji',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create custom Emoji for Member
     * Create a new custom Emoji
     * @param id The ID or username of the member
     * @param file
     * @param name Name for the emoji. 2 - 64 characters
     * @returns CustomEmoji Success
     * @throws ApiError
     */
    public postMembersIdCustomemoji(
        id: TrelloID,
        file: Blob,
        name: string,
    ): CancelablePromise<CustomEmoji> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/members/{id}/customEmoji',
            path: {
                'id': id,
            },
            query: {
                'file': file,
                'name': name,
            },
        });
    }

    /**
     * Get a Member's custom Emoji
     * Get a Member's custom Emoji
     * @param id The ID or username of the member
     * @param idEmoji The ID of the custom emoji
     * @param fields `all` or a comma-separated list of `name`, `url`
     * @returns CustomEmoji Success
     * @throws ApiError
     */
    public membersidcustomemojiidemoji(
        id: TrelloID,
        idEmoji: TrelloID,
        fields?: ('all' | Array<'name' | 'url'>),
    ): CancelablePromise<CustomEmoji> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/customEmoji/{idEmoji}',
            path: {
                'id': id,
                'idEmoji': idEmoji,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get Member's custom Stickers
     * Get a Member's uploaded stickers
     * @param id The ID or username of the member
     * @returns CustomSticker Success
     * @throws ApiError
     */
    public getMembersIdCustomstickers(
        id: TrelloID,
    ): CancelablePromise<Array<CustomSticker>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/customStickers',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create custom Sticker for Member
     * Upload a new custom sticker
     * @param id The ID or username of the member
     * @param file
     * @returns CustomSticker Success
     * @throws ApiError
     */
    public postMembersIdCustomstickers(
        id: TrelloID,
        file: Blob,
    ): CancelablePromise<CustomSticker> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/members/{id}/customStickers',
            path: {
                'id': id,
            },
            query: {
                'file': file,
            },
        });
    }

    /**
     * Get a Member's custom Sticker
     * Get a Member's custom Sticker
     * @param id The ID or username of the member
     * @param idSticker The ID of the uploaded sticker
     * @param fields `all` or a comma-separated list of `scaled`, `url`
     * @returns CustomSticker Success
     * @throws ApiError
     */
    public getMembersIdCustomstickersIdsticker(
        id: TrelloID,
        idSticker: TrelloID,
        fields?: ('all' | Array<'scaled' | 'url'>),
    ): CancelablePromise<CustomSticker> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/customStickers/{idSticker}',
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
     * Delete a Member's custom Sticker
     * Delete a Member's custom Sticker
     * @param id The ID or username of the member
     * @param idSticker The ID of the uploaded sticker
     * @returns any Success
     * @throws ApiError
     */
    public deleteMembersIdCustomstickersIdsticker(
        id: TrelloID,
        idSticker: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/members/{id}/customStickers/{idSticker}',
            path: {
                'id': id,
                'idSticker': idSticker,
            },
        });
    }

    /**
     * Get Member's Notifications
     * Get a member's notifications
     * @param id The ID or username of the member
     * @param entities
     * @param display
     * @param filter
     * @param readFilter One of: `all`, `read`, `unread`
     * @param fields `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param limit Max 1000
     * @param page Max 100
     * @param before A notification ID
     * @param since A notification ID
     * @param memberCreator
     * @param memberCreatorFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns Notification Success
     * @throws ApiError
     */
    public getMembersIdNotifications(
        id: TrelloID,
        entities: boolean = false,
        display: boolean = false,
        filter: string = 'all',
        readFilter: string = 'all',
        fields?: ('all' | Array<NotificationFields>),
        limit: number = 50,
        page: number = 0,
        before?: string,
        since?: string,
        memberCreator: boolean = true,
        memberCreatorFields?: ('all' | Array<MemberFields>),
    ): CancelablePromise<Array<Notification>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/notifications',
            path: {
                'id': id,
            },
            query: {
                'entities': entities,
                'display': display,
                'filter': filter,
                'read_filter': readFilter,
                'fields': fields,
                'limit': limit,
                'page': page,
                'before': before,
                'since': since,
                'memberCreator': memberCreator,
                'memberCreator_fields': memberCreatorFields,
            },
        });
    }

    /**
     * Get Member's Organizations
     * Get a member's Workspaces
     * @param id The ID or username of the member
     * @param filter One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private Workspaces)
     * @param fields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param paidAccount Whether or not to include paid account information in the returned workspace object
     * @returns Organization Success
     * @throws ApiError
     */
    public getMembersIdOrganizations(
        id: TrelloID,
        filter: 'all' | 'members' | 'none' | 'public' = 'all',
        fields?: ('all' | Array<OrganizationFields>),
        paidAccount: boolean = false,
    ): CancelablePromise<Array<Organization>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/organizations',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
                'fields': fields,
                'paid_account': paidAccount,
            },
        });
    }

    /**
     * Get Organizations a Member has been invited to
     * Get a member's Workspaces they have been invited to
     * @param id The ID or username of the member
     * @param fields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns Organization Success
     * @throws ApiError
     */
    public getMembersIdOrganizationsinvited(
        id: TrelloID,
        fields?: ('all' | Array<OrganizationFields>),
    ): CancelablePromise<Array<Organization>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/organizationsInvited',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get Member's saved searched
     * List the saved searches of a Member
     * @param id The ID or username of the member
     * @returns SavedSearch Success
     * @throws ApiError
     */
    public getMembersIdSavedsearches(
        id: TrelloID,
    ): CancelablePromise<Array<SavedSearch>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/savedSearches',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create saved Search for Member
     * Create a saved search
     * @param id The ID or username of the member
     * @param name The name for the saved search
     * @param query The search query
     * @param pos The position of the saved search. `top`, `bottom`, or a positive float.
     * @returns SavedSearch Success
     * @throws ApiError
     */
    public postMembersIdSavedsearches(
        id: TrelloID,
        name: string,
        query: string,
        pos: posStringOrNumber,
    ): CancelablePromise<SavedSearch> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/members/{id}/savedSearches',
            path: {
                'id': id,
            },
            query: {
                'name': name,
                'query': query,
                'pos': pos,
            },
        });
    }

    /**
     * Get a saved search
     * Get a saved search
     * @param id The ID or username of the member
     * @param idSearch The ID of the saved search to delete
     * @returns SavedSearch Success
     * @throws ApiError
     */
    public getMembersIdSavedsearchesIdsearch(
        id: string,
        idSearch: string,
    ): CancelablePromise<SavedSearch> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/savedSearches/{idSearch}',
            path: {
                'id': id,
                'idSearch': idSearch,
            },
        });
    }

    /**
     * Update a saved search
     * Update a saved search
     * @param id The ID or username of the member
     * @param idSearch The ID of the saved search to delete
     * @param name The new name for the saved search
     * @param query The new search query
     * @param pos New position for saves search. `top`, `bottom`, or a positive float.
     * @returns SavedSearch Success
     * @throws ApiError
     */
    public putMembersIdSavedsearchesIdsearch(
        id: string,
        idSearch: string,
        name?: string,
        query?: string,
        pos?: string,
    ): CancelablePromise<SavedSearch> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/members/{id}/savedSearches/{idSearch}',
            path: {
                'id': id,
                'idSearch': idSearch,
            },
            query: {
                'name': name,
                'query': query,
                'pos': pos,
            },
        });
    }

    /**
     * Delete a saved search
     * Delete a saved search
     * @param id The ID or username of the member
     * @param idSearch The ID of the saved search to delete
     * @returns any Success
     * @throws ApiError
     */
    public deleteMembersIdSavedsearchesIdsearch(
        id: string,
        idSearch: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/members/{id}/savedSearches/{idSearch}',
            path: {
                'id': id,
                'idSearch': idSearch,
            },
        });
    }

    /**
     * Get Member's Tokens
     * List a members app tokens
     * @param id The ID or username of the member
     * @param webhooks Whether to include webhooks
     * @returns Token Success
     * @throws ApiError
     */
    public getMembersIdTokens(
        id: TrelloID,
        webhooks: boolean = false,
    ): CancelablePromise<Array<Token>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/tokens',
            path: {
                'id': id,
            },
            query: {
                'webhooks': webhooks,
            },
        });
    }

    /**
     * Create Avatar for Member
     * Create a new avatar for a member
     * @param id The ID or username of the member
     * @param file
     * @returns any Success
     * @throws ApiError
     */
    public membersidavatar(
        id: string,
        file: Blob,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/members/{id}/avatar',
            path: {
                'id': id,
            },
            query: {
                'file': file,
            },
        });
    }

    /**
     * Dismiss a message for Member
     * Dismiss a message
     * @param id The ID or username of the member
     * @param value The message to dismiss
     * @returns any Success
     * @throws ApiError
     */
    public postMembersIdOnetimemessagesdismissed(
        id: TrelloID,
        value: TrelloID,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/members/{id}/oneTimeMessagesDismissed',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Get a Member's notification channel settings
     * Get a member's notification channel settings
     * @param id The ID or username of the member
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    public getMembersIdNotificationChannelSettings(
        id: (TrelloID | string),
    ): CancelablePromise<Array<NotificationChannelSettings>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/notificationsChannelSettings',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update blocked notification keys of Member on a channel
     * Update blocked notification keys of Member on a specific channel
     * @param id The ID or username of the member
     * @param requestBody
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    public putMembersIdNotificationChannelSettingsChannelBlockedKeys(
        id: (TrelloID | string),
        requestBody: {
            channel: Channel;
            /**
             * Blocked key or array of blocked keys.
             */
            blockedKeys: (BlockedKey | Array<BlockedKey>);
        },
    ): CancelablePromise<NotificationChannelSettings> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/members/{id}/notificationsChannelSettings',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get blocked notification keys of Member on this channel
     * Get blocked notification keys of Member on a specific channel
     * @param id The ID or username of the member
     * @param channel Channel to block notifications on
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    public getMembersIdNotificationChannelSettingsChannel(
        id: (TrelloID | string),
        channel: Channel,
    ): CancelablePromise<NotificationChannelSettings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/members/{id}/notificationsChannelSettings/{channel}',
            path: {
                'id': id,
                'channel': channel,
            },
        });
    }

    /**
     * Update blocked notification keys of Member on a channel
     * Update blocked notification keys of Member on a specific channel
     * @param id The ID or username of the member
     * @param channel Channel to block notifications on
     * @param requestBody
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    public putMembersIdNotificationChannelSettingsChannelBlockedKeys1(
        id: (TrelloID | string),
        channel: Channel,
        requestBody: {
            /**
             * Singular key or array of notification keys
             */
            blockedKeys: (BlockedKey | Array<BlockedKey>);
        },
    ): CancelablePromise<NotificationChannelSettings> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/members/{id}/notificationsChannelSettings/{channel}',
            path: {
                'id': id,
                'channel': channel,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update blocked notification keys of Member on a channel
     * Update blocked notification keys of Member on a specific channel
     * @param id The ID or username of the member
     * @param channel Channel to block notifications on
     * @param blockedKeys Singular key or comma-separated list of notification keys
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    public putMembersIdNotificationChannelSettingsChannelBlockedKeys2(
        id: (TrelloID | string),
        channel: Channel,
        blockedKeys: BlockedKey,
    ): CancelablePromise<NotificationChannelSettings> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}',
            path: {
                'id': id,
                'channel': channel,
                'blockedKeys': blockedKeys,
            },
        });
    }

}
