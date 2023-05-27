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
     * @returns any Success
     * @throws ApiError
     */
    public getMembersId({
        id,
        actions,
        boards,
        boardBackgrounds = 'none',
        boardsInvited,
        boardsInvitedFields,
        boardStars = false,
        cards = 'none',
        customBoardBackgrounds = 'none',
        customEmoji = 'none',
        customStickers = 'none',
        fields,
        notifications,
        organizations = 'none',
        organizationFields,
        organizationPaidAccount = false,
        organizationsInvited = 'none',
        organizationsInvitedFields,
        paidAccount = false,
        savedSearches = false,
        tokens = 'none',
    }: {
        /**
         * The ID or username of the member
         */
        id: (TrelloID | string),
        /**
         * See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)
         */
        actions?: string,
        /**
         * See the [Boards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#boards-nested-resource)
         */
        boards?: string,
        /**
         * One of: `all`, `custom`, `default`, `none`, `premium`
         */
        boardBackgrounds?: 'all' | 'custom' | 'default' | 'none' | 'premium',
        /**
         * `all` or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned
         */
        boardsInvited?: ('all' | Array<'closed' | 'members' | 'open' | 'organization' | 'pinned' | 'public' | 'starred' | 'unpinned'>),
        /**
         * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        boardsInvitedFields?: ('all' | Array<BoardFields>),
        /**
         * Whether to return the boardStars or not
         */
        boardStars?: boolean,
        /**
         * See the [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource) for additional options
         */
        cards?: string,
        /**
         * `all` or `none`
         */
        customBoardBackgrounds?: 'all' | 'none',
        /**
         * `all` or `none`
         */
        customEmoji?: 'all' | 'none',
        /**
         * `all` or `none`
         */
        customStickers?: 'all' | 'none',
        /**
         * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<MemberFields>),
        /**
         * See the [Notifications Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#notifications-nested-resource)
         */
        notifications?: string,
        /**
         * One of: `all`, `members`, `none`, `public`
         */
        organizations?: 'all' | 'members' | 'none' | 'public',
        /**
         * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        organizationFields?: ('all' | Array<OrganizationFields>),
        /**
         * Whether or not to include paid account information in the returned workspace object
         */
        organizationPaidAccount?: boolean,
        /**
         * One of: `all`, `members`, `none`, `public`
         */
        organizationsInvited?: 'all' | 'members' | 'none' | 'public',
        /**
         * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        organizationsInvitedFields?: ('all' | Array<OrganizationFields>),
        /**
         * Whether or not to include paid account information in the returned member object
         * @deprecated
         */
        paidAccount?: boolean,
        savedSearches?: boolean,
        /**
         * `all` or `none`
         */
        tokens?: 'all' | 'none',
    }): CancelablePromise<Member> {
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
     * @returns any Success
     * @throws ApiError
     */
    public putMembersId({
        id,
        fullName,
        initials,
        username,
        bio,
        avatarSource,
        prefsColorBlind,
        prefsLocale,
        prefsMinutesBetweenSummaries,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * New name for the member. Cannot begin or end with a space.
         */
        fullName?: string,
        /**
         * New initials for the member. 1-4 characters long.
         */
        initials?: string,
        /**
         * New username for the member. At least 3 characters long, only lowercase letters, underscores, and numbers. Must be unique.
         */
        username?: string,
        bio?: string,
        /**
         * One of: `gravatar`, `none`, `upload`
         */
        avatarSource?: 'gravatar' | 'none' | 'upload',
        prefsColorBlind?: boolean,
        prefsLocale?: string,
        /**
         * `-1` for disabled, `1`, or `60`
         */
        prefsMinutesBetweenSummaries?: number,
    }): CancelablePromise<Member> {
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
     * @returns any Success
     * @throws ApiError
     */
    public getMembersIdField({
        id,
        field,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * One of the member [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        field: MemberFields,
    }): CancelablePromise<Member> {
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
     * @returns any Success
     * @throws ApiError
     */
    public getMembersIdActions({
        id,
        filter,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
         */
        filter?: string,
    }): CancelablePromise<Array<Member>> {
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
     * @returns any Success
     * @throws ApiError
     */
    public getMembersIdBoardbackgrounds({
        id,
        filter = 'all',
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * One of: `all`, `custom`, `default`, `none`, `premium`
         */
        filter?: 'all' | 'custom' | 'default' | 'none' | 'premium',
    }): CancelablePromise<Array<BoardBackground>> {
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
     * @returns any Success
     * @throws ApiError
     */
    public postMembersIdBoardbackgrounds1({
        id,
        file,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        file: Blob,
    }): CancelablePromise<Array<BoardBackground>> {
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
     * @returns BoardBackground Success
     * @throws ApiError
     */
    public getMembersIdBoardbackgroundsIdbackground({
        id,
        idBackground,
        fields,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * The ID of the board background
         */
        idBackground: TrelloID,
        /**
         * `all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile`
         */
        fields?: ('all' | Array<'all' | 'brightness' | 'fullSizeUrl' | 'scaled' | 'tile'>),
    }): CancelablePromise<BoardBackground> {
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
     * @returns BoardBackground Success
     * @throws ApiError
     */
    public putMembersIdBoardbackgroundsIdbackground({
        id,
        idBackground,
        brightness,
        tile,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * The ID of the board background
         */
        idBackground: TrelloID,
        /**
         * One of: `dark`, `light`, `unknown`
         */
        brightness?: 'dark' | 'light' | 'unknown',
        /**
         * Whether the background should be tiled
         */
        tile?: boolean,
    }): CancelablePromise<BoardBackground> {
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
     * @returns any Success
     * @throws ApiError
     */
    public deleteMembersIdBoardbackgroundsIdbackground({
        id,
        idBackground,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * The ID of the board background
         */
        idBackground: TrelloID,
    }): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public getMembersIdBoardstars({
        id,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
    }): CancelablePromise<any> {
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
     * @returns BoardStars Success
     * @throws ApiError
     */
    public postMembersIdBoardstars({
        id,
        idBoard,
        pos,
    }: {
        /**
         * The ID or username of the member
         */
        id: (TrelloID | string),
        /**
         * The ID of the board to star
         */
        idBoard: TrelloID,
        /**
         * The position of the newly starred board. `top`, `bottom`, or a positive float.
         */
        pos: posStringOrNumber,
    }): CancelablePromise<Array<BoardStars>> {
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
     * @returns BoardStars Success
     * @throws ApiError
     */
    public getMembersIdBoardstarsIdstar({
        id,
        idStar,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * The ID of the board star
         */
        idStar: TrelloID,
    }): CancelablePromise<BoardStars> {
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
     * @returns any Success
     * @throws ApiError
     */
    public putMembersIdBoardstarsIdstar({
        id,
        idStar,
        pos,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * The ID of the board star
         */
        idStar: TrelloID,
        /**
         * New position for the starred board. `top`, `bottom`, or a positive float.
         */
        pos?: posStringOrNumber,
    }): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public deleteMembersIdBoardstarsIdstar({
        id,
        idStar,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * The ID of the board star
         */
        idStar: TrelloID,
    }): CancelablePromise<any> {
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
     * @returns Board Success
     * @throws ApiError
     */
    public getMembersIdBoards({
        id,
        filter,
        fields,
        lists = 'none',
        organization = false,
        organizationFields,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred`
         */
        filter?: ('all' | Array<'all' | 'closed' | 'members' | 'open' | 'organization' | 'public' | 'starred'>),
        /**
         * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<BoardFields>),
        /**
         * Which lists to include with the boards. One of: `all`, `closed`, `none`, `open`
         */
        lists?: 'all' | 'closed' | 'none' | 'open',
        /**
         * Whether to include the Organization object with the Boards
         */
        organization?: boolean,
        /**
         * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        organizationFields?: ('all' | Array<OrganizationFields>),
    }): CancelablePromise<Array<Board>> {
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
     * @returns Board Success
     * @throws ApiError
     */
    public getMembersIdBoardsinvited({
        id,
        fields,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<BoardFields>),
    }): CancelablePromise<Array<Board>> {
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
     * @returns Card Success
     * @throws ApiError
     */
    public getMembersIdCards({
        id,
        filter = 'visible',
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * One of: `all`, `closed`, `none`, `open`, `visible`
         */
        filter?: 'all' | 'closed' | 'none' | 'open' | 'visible',
    }): CancelablePromise<Array<Card>> {
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
     * @returns BoardBackground Success
     * @throws ApiError
     */
    public getMembersIdCustomboardbackgrounds({
        id,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
    }): CancelablePromise<Array<BoardBackground>> {
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
     * @returns BoardBackground Success
     * @throws ApiError
     */
    public membersidcustomboardbackgrounds1({
        id,
        file,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        file: Blob,
    }): CancelablePromise<BoardBackground> {
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
     * @returns BoardBackground Success
     * @throws ApiError
     */
    public getMembersIdCustomboardbackgroundsIdbackground({
        id,
        idBackground,
    }: {
        /**
         * The ID or username of the member
         */
        id: (TrelloID | string),
        /**
         * The ID of the custom background
         */
        idBackground: TrelloID,
    }): CancelablePromise<BoardBackground> {
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
     * @returns BoardBackground Success
     * @throws ApiError
     */
    public putMembersIdCustomboardbackgroundsIdbackground({
        id,
        idBackground,
        brightness,
        tile,
    }: {
        /**
         * The ID or username of the member
         */
        id: (TrelloID | string),
        /**
         * The ID of the custom background
         */
        idBackground: TrelloID,
        /**
         * One of: `dark`, `light`, `unknown`
         */
        brightness?: 'dark' | 'light' | 'unknown',
        /**
         * Whether to tile the background
         */
        tile?: boolean,
    }): CancelablePromise<BoardBackground> {
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
     * @returns any Success
     * @throws ApiError
     */
    public deleteMembersIdCustomboardbackgroundsIdbackground({
        id,
        idBackground,
    }: {
        /**
         * The ID or username of the member
         */
        id: (TrelloID | string),
        /**
         * The ID of the custom background
         */
        idBackground: TrelloID,
    }): CancelablePromise<any> {
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
     * @returns CustomEmoji Success
     * @throws ApiError
     */
    public getMembersIdCustomemoji({
        id,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
    }): CancelablePromise<Array<CustomEmoji>> {
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
     * @returns CustomEmoji Success
     * @throws ApiError
     */
    public postMembersIdCustomemoji({
        id,
        file,
        name,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        file: Blob,
        /**
         * Name for the emoji. 2 - 64 characters
         */
        name: string,
    }): CancelablePromise<CustomEmoji> {
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
     * @returns CustomEmoji Success
     * @throws ApiError
     */
    public membersidcustomemojiidemoji({
        id,
        idEmoji,
        fields,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * The ID of the custom emoji
         */
        idEmoji: TrelloID,
        /**
         * `all` or a comma-separated list of `name`, `url`
         */
        fields?: ('all' | Array<'name' | 'url'>),
    }): CancelablePromise<CustomEmoji> {
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
     * @returns CustomSticker Success
     * @throws ApiError
     */
    public getMembersIdCustomstickers({
        id,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
    }): CancelablePromise<Array<CustomSticker>> {
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
     * @returns CustomSticker Success
     * @throws ApiError
     */
    public postMembersIdCustomstickers({
        id,
        file,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        file: Blob,
    }): CancelablePromise<CustomSticker> {
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
     * @returns CustomSticker Success
     * @throws ApiError
     */
    public getMembersIdCustomstickersIdsticker({
        id,
        idSticker,
        fields,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * The ID of the uploaded sticker
         */
        idSticker: TrelloID,
        /**
         * `all` or a comma-separated list of `scaled`, `url`
         */
        fields?: ('all' | Array<'scaled' | 'url'>),
    }): CancelablePromise<CustomSticker> {
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
     * @returns any Success
     * @throws ApiError
     */
    public deleteMembersIdCustomstickersIdsticker({
        id,
        idSticker,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * The ID of the uploaded sticker
         */
        idSticker: TrelloID,
    }): CancelablePromise<any> {
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
     * @returns Notification Success
     * @throws ApiError
     */
    public getMembersIdNotifications({
        id,
        entities = false,
        display = false,
        filter = 'all',
        readFilter = 'all',
        fields,
        limit = 50,
        page = 0,
        before,
        since,
        memberCreator = true,
        memberCreatorFields,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        entities?: boolean,
        display?: boolean,
        filter?: string,
        /**
         * One of: `all`, `read`, `unread`
         */
        readFilter?: string,
        /**
         * `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<NotificationFields>),
        /**
         * Max 1000
         */
        limit?: number,
        /**
         * Max 100
         */
        page?: number,
        /**
         * A notification ID
         */
        before?: string,
        /**
         * A notification ID
         */
        since?: string,
        memberCreator?: boolean,
        /**
         * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        memberCreatorFields?: ('all' | Array<MemberFields>),
    }): CancelablePromise<Array<Notification>> {
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
     * @returns Organization Success
     * @throws ApiError
     */
    public getMembersIdOrganizations({
        id,
        filter = 'all',
        fields,
        paidAccount = false,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private Workspaces)
         */
        filter?: 'all' | 'members' | 'none' | 'public',
        /**
         * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<OrganizationFields>),
        /**
         * Whether or not to include paid account information in the returned workspace object
         */
        paidAccount?: boolean,
    }): CancelablePromise<Array<Organization>> {
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
     * @returns Organization Success
     * @throws ApiError
     */
    public getMembersIdOrganizationsinvited({
        id,
        fields,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<OrganizationFields>),
    }): CancelablePromise<Array<Organization>> {
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
     * @returns SavedSearch Success
     * @throws ApiError
     */
    public getMembersIdSavedsearches({
        id,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
    }): CancelablePromise<Array<SavedSearch>> {
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
     * @returns SavedSearch Success
     * @throws ApiError
     */
    public postMembersIdSavedsearches({
        id,
        name,
        query,
        pos,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * The name for the saved search
         */
        name: string,
        /**
         * The search query
         */
        query: string,
        /**
         * The position of the saved search. `top`, `bottom`, or a positive float.
         */
        pos: posStringOrNumber,
    }): CancelablePromise<SavedSearch> {
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
     * @returns SavedSearch Success
     * @throws ApiError
     */
    public getMembersIdSavedsearchesIdsearch({
        id,
        idSearch,
    }: {
        /**
         * The ID or username of the member
         */
        id: string,
        /**
         * The ID of the saved search to delete
         */
        idSearch: string,
    }): CancelablePromise<SavedSearch> {
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
     * @returns SavedSearch Success
     * @throws ApiError
     */
    public putMembersIdSavedsearchesIdsearch({
        id,
        idSearch,
        name,
        query,
        pos,
    }: {
        /**
         * The ID or username of the member
         */
        id: string,
        /**
         * The ID of the saved search to delete
         */
        idSearch: string,
        /**
         * The new name for the saved search
         */
        name?: string,
        /**
         * The new search query
         */
        query?: string,
        /**
         * New position for saves search. `top`, `bottom`, or a positive float.
         */
        pos?: string,
    }): CancelablePromise<SavedSearch> {
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
     * @returns any Success
     * @throws ApiError
     */
    public deleteMembersIdSavedsearchesIdsearch({
        id,
        idSearch,
    }: {
        /**
         * The ID or username of the member
         */
        id: string,
        /**
         * The ID of the saved search to delete
         */
        idSearch: string,
    }): CancelablePromise<any> {
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
     * @returns Token Success
     * @throws ApiError
     */
    public getMembersIdTokens({
        id,
        webhooks = false,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * Whether to include webhooks
         */
        webhooks?: boolean,
    }): CancelablePromise<Array<Token>> {
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
     * @returns any Success
     * @throws ApiError
     */
    public membersidavatar({
        id,
        file,
    }: {
        /**
         * The ID or username of the member
         */
        id: string,
        file: Blob,
    }): CancelablePromise<any> {
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
     * @returns any Success
     * @throws ApiError
     */
    public postMembersIdOnetimemessagesdismissed({
        id,
        value,
    }: {
        /**
         * The ID or username of the member
         */
        id: TrelloID,
        /**
         * The message to dismiss
         */
        value: TrelloID,
    }): CancelablePromise<any> {
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
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    public getMembersIdNotificationChannelSettings({
        id,
    }: {
        /**
         * The ID or username of the member
         */
        id: (TrelloID | string),
    }): CancelablePromise<Array<NotificationChannelSettings>> {
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
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    public putMembersIdNotificationChannelSettingsChannelBlockedKeys({
        id,
        requestBody,
    }: {
        /**
         * The ID or username of the member
         */
        id: (TrelloID | string),
        requestBody: {
            channel: Channel;
            /**
             * Blocked key or array of blocked keys.
             */
            blockedKeys: (BlockedKey | Array<BlockedKey>);
        },
    }): CancelablePromise<NotificationChannelSettings> {
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
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    public getMembersIdNotificationChannelSettingsChannel({
        id,
        channel,
    }: {
        /**
         * The ID or username of the member
         */
        id: (TrelloID | string),
        /**
         * Channel to block notifications on
         */
        channel: Channel,
    }): CancelablePromise<NotificationChannelSettings> {
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
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    public putMembersIdNotificationChannelSettingsChannelBlockedKeys1({
        id,
        channel,
        requestBody,
    }: {
        /**
         * The ID or username of the member
         */
        id: (TrelloID | string),
        /**
         * Channel to block notifications on
         */
        channel: Channel,
        requestBody: {
            /**
             * Singular key or array of notification keys
             */
            blockedKeys: (BlockedKey | Array<BlockedKey>);
        },
    }): CancelablePromise<NotificationChannelSettings> {
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
     * @returns NotificationChannelSettings Success
     * @throws ApiError
     */
    public putMembersIdNotificationChannelSettingsChannelBlockedKeys2({
        id,
        channel,
        blockedKeys,
    }: {
        /**
         * The ID or username of the member
         */
        id: (TrelloID | string),
        /**
         * Channel to block notifications on
         */
        channel: Channel,
        /**
         * Singular key or comma-separated list of notification keys
         */
        blockedKeys: BlockedKey,
    }): CancelablePromise<NotificationChannelSettings> {
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
