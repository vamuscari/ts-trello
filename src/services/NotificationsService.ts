/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Board } from '../models/Board';
import type { BoardFields } from '../models/BoardFields';
import type { Card } from '../models/Card';
import type { CardFields } from '../models/CardFields';
import type { ListFields } from '../models/ListFields';
import type { Member } from '../models/Member';
import type { MemberFields } from '../models/MemberFields';
import type { Notification } from '../models/Notification';
import type { NotificationFields } from '../models/NotificationFields';
import type { Organization } from '../models/Organization';
import type { OrganizationFields } from '../models/OrganizationFields';
import type { TrelloID } from '../models/TrelloID';
import type { TrelloList } from '../models/TrelloList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NotificationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a Notification
     * @returns any Success
     * @throws ApiError
     */
    public getNotificationsId({
        id,
        board = false,
        boardFields,
        card = false,
        cardFields,
        display = false,
        entities = false,
        fields,
        list = false,
        member = true,
        memberFields,
        memberCreator = true,
        memberCreatorFields,
        organization = false,
        organizationFields,
    }: {
        /**
         * The ID of the notification
         */
        id: TrelloID,
        /**
         * Whether to include the board object
         */
        board?: boolean,
        /**
         * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        boardFields?: ('all' | Array<BoardFields>),
        /**
         * Whether to include the card object
         */
        card?: boolean,
        /**
         * `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        cardFields?: ('all' | Array<CardFields>),
        /**
         * Whether to include the display object with the results
         */
        display?: boolean,
        /**
         * Whether to include the entities object with the results
         */
        entities?: boolean,
        /**
         * `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<NotificationFields>),
        /**
         * Whether to include the list object
         */
        list?: boolean,
        /**
         * Whether to include the member object
         */
        member?: boolean,
        /**
         * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        memberFields?: ('all' | Array<MemberFields>),
        /**
         * Whether to include the member object of the creator
         */
        memberCreator?: boolean,
        /**
         * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        memberCreatorFields?: ('all' | Array<MemberFields>),
        /**
         * Whether to include the organization object
         */
        organization?: boolean,
        /**
         * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        organizationFields?: ('all' | Array<OrganizationFields>),
    }): CancelablePromise<Notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications/{id}',
            path: {
                'id': id,
            },
            query: {
                'board': board,
                'board_fields': boardFields,
                'card': card,
                'card_fields': cardFields,
                'display': display,
                'entities': entities,
                'fields': fields,
                'list': list,
                'member': member,
                'member_fields': memberFields,
                'memberCreator': memberCreator,
                'memberCreator_fields': memberCreatorFields,
                'organization': organization,
                'organization_fields': organizationFields,
            },
        });
    }

    /**
     * Update a Notification's read status
     * Update the read status of a notification
     * @returns any Success
     * @throws ApiError
     */
    public putNotificationsId({
        id,
        unread,
    }: {
        /**
         * The ID of the notification
         */
        id: TrelloID,
        /**
         * Whether the notification should be marked as read or not
         */
        unread?: boolean,
    }): CancelablePromise<Notification> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/notifications/{id}',
            path: {
                'id': id,
            },
            query: {
                'unread': unread,
            },
        });
    }

    /**
     * Get a field of a Notification
     * Get a specific property of a notification
     * @returns any Success
     * @throws ApiError
     */
    public getNotificationsIdField({
        id,
        field,
    }: {
        /**
         * The ID of the notification
         */
        id: TrelloID,
        /**
         * A notification [field](/cloud/trello/guides/rest-api/object-definitions/)
         */
        field: NotificationFields,
    }): CancelablePromise<Notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications/{id}/{field}',
            path: {
                'id': id,
                'field': field,
            },
        });
    }

    /**
     * Mark all Notifications as read
     * Mark all notifications as read
     * @returns any Success
     * @throws ApiError
     */
    public postNotificationsAllRead({
        read = true,
        ids,
    }: {
        /**
         * Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read)
         */
        read?: boolean,
        /**
         * A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in the group as read/unread.
         */
        ids?: Array<TrelloID>,
    }): CancelablePromise<Notification> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/notifications/all/read',
            query: {
                'read': read,
                'ids': ids,
            },
        });
    }

    /**
     * Update Notification's read status
     * Update Notification's read status
     * @returns any Success
     * @throws ApiError
     */
    public putNotificationsIdUnread({
        id,
        value,
    }: {
        /**
         * The ID of the notification
         */
        id: TrelloID,
        value?: string,
    }): CancelablePromise<Notification> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/notifications/{id}/unread',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Get the Board a Notification is on
     * Get the board a notification is associated with
     * @returns any Success
     * @throws ApiError
     */
    public getNotificationsIdBoard({
        id,
        fields,
    }: {
        /**
         * The ID of the notification
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<BoardFields>),
    }): CancelablePromise<Board> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications/{id}/board',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get the Card a Notification is on
     * Get the card a notification is associated with
     * @returns any Success
     * @throws ApiError
     */
    public getNotificationsIdCard({
        id,
        fields,
    }: {
        /**
         * The ID of the notification
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<CardFields>),
    }): CancelablePromise<Card> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications/{id}/card',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get the List a Notification is on
     * Get the list a notification is associated with
     * @returns any Success
     * @throws ApiError
     */
    public getNotificationsIdList({
        id,
        fields,
    }: {
        /**
         * The ID of the notification
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<ListFields>),
    }): CancelablePromise<TrelloList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications/{id}/list',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get the Member a Notification is about (not the creator)
     * Get the member (not the creator) a notification is about
     * @returns any Success
     * @throws ApiError
     */
    public notificationsidmember({
        id,
        fields,
    }: {
        /**
         * The ID of the notification
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<MemberFields>),
    }): CancelablePromise<Member> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications/{id}/member',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get the Member who created the Notification
     * Get the member who created the notification
     * @returns any Success
     * @throws ApiError
     */
    public getNotificationsIdMembercreator({
        id,
        fields,
    }: {
        /**
         * The ID of the notification
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<MemberFields>),
    }): CancelablePromise<Member> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications/{id}/memberCreator',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get a Notification's associated Organization
     * Get the organization a notification is associated with
     * @returns any Success
     * @throws ApiError
     */
    public getNotificationsIdOrganization({
        id,
        fields,
    }: {
        /**
         * The ID of the notification
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<OrganizationFields>),
    }): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications/{id}/organization',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

}
