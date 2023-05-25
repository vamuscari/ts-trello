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
     * @param id The ID of the notification
     * @param board Whether to include the board object
     * @param boardFields `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param card Whether to include the card object
     * @param cardFields `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param display Whether to include the display object with the results
     * @param entities Whether to include the entities object with the results
     * @param fields `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param list Whether to include the list object
     * @param member Whether to include the member object
     * @param memberFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param memberCreator Whether to include the member object of the creator
     * @param memberCreatorFields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @param organization Whether to include the organization object
     * @param organizationFields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getNotificationsId(
        id: TrelloID,
        board: boolean = false,
        boardFields?: ('all' | Array<BoardFields>),
        card: boolean = false,
        cardFields?: ('all' | Array<CardFields>),
        display: boolean = false,
        entities: boolean = false,
        fields?: ('all' | Array<NotificationFields>),
        list: boolean = false,
        member: boolean = true,
        memberFields?: ('all' | Array<MemberFields>),
        memberCreator: boolean = true,
        memberCreatorFields?: ('all' | Array<MemberFields>),
        organization: boolean = false,
        organizationFields?: ('all' | Array<OrganizationFields>),
    ): CancelablePromise<Notification> {
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
     * @param id The ID of the notification
     * @param unread Whether the notification should be marked as read or not
     * @returns any Success
     * @throws ApiError
     */
    public putNotificationsId(
        id: TrelloID,
        unread?: boolean,
    ): CancelablePromise<Notification> {
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
     * @param id The ID of the notification
     * @param field A notification [field](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getNotificationsIdField(
        id: TrelloID,
        field: NotificationFields,
    ): CancelablePromise<Notification> {
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
     * @param read Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read)
     * @param ids A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in the group as read/unread.
     * @returns any Success
     * @throws ApiError
     */
    public postNotificationsAllRead(
        read: boolean = true,
        ids?: Array<TrelloID>,
    ): CancelablePromise<Notification> {
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
     * @param id The ID of the notification
     * @param value
     * @returns any Success
     * @throws ApiError
     */
    public putNotificationsIdUnread(
        id: TrelloID,
        value?: string,
    ): CancelablePromise<Notification> {
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
     * @param id The ID of the notification
     * @param fields `all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getNotificationsIdBoard(
        id: TrelloID,
        fields?: ('all' | Array<BoardFields>),
    ): CancelablePromise<Board> {
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
     * @param id The ID of the notification
     * @param fields `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getNotificationsIdCard(
        id: TrelloID,
        fields?: ('all' | Array<CardFields>),
    ): CancelablePromise<Card> {
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
     * @param id The ID of the notification
     * @param fields `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getNotificationsIdList(
        id: TrelloID,
        fields?: ('all' | Array<ListFields>),
    ): CancelablePromise<TrelloList> {
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
     * @param id The ID of the notification
     * @param fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public notificationsidmember(
        id: TrelloID,
        fields?: ('all' | Array<MemberFields>),
    ): CancelablePromise<Member> {
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
     * @param id The ID of the notification
     * @param fields `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getNotificationsIdMembercreator(
        id: TrelloID,
        fields?: ('all' | Array<MemberFields>),
    ): CancelablePromise<Member> {
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
     * @param id The ID of the notification
     * @param fields `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)
     * @returns any Success
     * @throws ApiError
     */
    public getNotificationsIdOrganization(
        id: TrelloID,
        fields?: ('all' | Array<OrganizationFields>),
    ): CancelablePromise<Organization> {
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
