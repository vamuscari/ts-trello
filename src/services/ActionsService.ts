/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Action } from '../models/Action';
import type { ActionFields } from '../models/ActionFields';
import type { Board } from '../models/Board';
import type { BoardFields } from '../models/BoardFields';
import type { Card } from '../models/Card';
import type { CardFields } from '../models/CardFields';
import type { ListFields } from '../models/ListFields';
import type { Member } from '../models/Member';
import type { MemberFields } from '../models/MemberFields';
import type { Organization } from '../models/Organization';
import type { OrganizationFields } from '../models/OrganizationFields';
import type { TrelloID } from '../models/TrelloID';
import type { TrelloList } from '../models/TrelloList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ActionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get an Action
     * Get an Action
     * @returns any Success
     * @throws ApiError
     */
    public getActionsId({
        id,
        display = true,
        entities = false,
        fields,
        member = true,
        memberFields,
        memberCreator = true,
        memberCreatorFields,
    }: {
        /**
         * The ID of the Action
         */
        id: TrelloID,
        display?: boolean,
        entities?: boolean,
        /**
         * `all` or a comma-separated list of action [fields](/cloud/trello/guides/rest-api/object-definitions/#action-object)
         */
        fields?: ('all' | Array<ActionFields>),
        member?: boolean,
        /**
         * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        memberFields?: ('all' | Array<MemberFields>),
        /**
         * Whether to include the member object for the creator of the action
         */
        memberCreator?: boolean,
        /**
         * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        memberCreatorFields?: ('all' | Array<MemberFields>),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/actions/{id}',
            path: {
                'id': id,
            },
            query: {
                'display': display,
                'entities': entities,
                'fields': fields,
                'member': member,
                'member_fields': memberFields,
                'memberCreator': memberCreator,
                'memberCreator_fields': memberCreatorFields,
            },
        });
    }

    /**
     * Update an Action
     * Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment.
     * @returns any Success
     * @throws ApiError
     */
    public putActionsId({
        id,
        text,
    }: {
        /**
         * The ID of the Action
         */
        id: TrelloID,
        /**
         * The new text for the comment
         */
        text: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/actions/{id}',
            path: {
                'id': id,
            },
            query: {
                'text': text,
            },
        });
    }

    /**
     * Delete an Action
     * Delete a specific action. Only comment actions can be deleted.
     * @returns any Success
     * @throws ApiError
     */
    public deleteActionsId({
        id,
    }: {
        /**
         * The ID of the Action
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/actions/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get a specific field on an Action
     * Get a specific property of an action
     * @returns Action Success
     * @throws ApiError
     */
    public getActionsIdField({
        id,
        field,
    }: {
        /**
         * The ID of the Action
         */
        id: TrelloID,
        /**
         * An action field
         */
        field: ActionFields,
    }): CancelablePromise<Action> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/actions/{id}/{field}',
            path: {
                'id': id,
                'field': field,
            },
        });
    }

    /**
     * Get the Board for an Action
     * Get the Board for an Action
     * @returns Board Success
     * @throws ApiError
     */
    public getActionsIdBoard({
        id,
        fields,
    }: {
        /**
         * The ID of the action
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of board fields
         */
        fields?: ('all' | Array<BoardFields>),
    }): CancelablePromise<Board> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/actions/{id}/board',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get the Card for an Action
     * Get the card for an action
     * @returns Card Success
     * @throws ApiError
     */
    public getActionsIdCard({
        id,
        fields,
    }: {
        /**
         * The ID of the action
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of card fields
         */
        fields?: ('all' | Array<CardFields>),
    }): CancelablePromise<Card> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/actions/{id}/card',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get the List for an Action
     * Get the List for an Action
     * @returns TrelloList Success
     * @throws ApiError
     */
    public getActionsIdList({
        id,
        fields,
    }: {
        /**
         * The ID of the action
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of list fields
         */
        fields?: ('all' | Array<ListFields>),
    }): CancelablePromise<TrelloList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/actions/{id}/list',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get the Member of an Action
     * Gets the member of an action (not the creator)
     * @returns Member Success
     * @throws ApiError
     */
    public getActionsIdMember({
        id,
        fields,
    }: {
        /**
         * The ID of the Action
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of member fields
         */
        fields?: ('all' | Array<MemberFields>),
    }): CancelablePromise<Member> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/actions/{id}/member',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get the Member Creator of an Action
     * Get the Member who created the Action
     * @returns Member Success
     * @throws ApiError
     */
    public getActionsIdMembercreator({
        id,
        fields,
    }: {
        /**
         * The ID of the Action
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of member fields
         */
        fields?: ('all' | Array<MemberFields>),
    }): CancelablePromise<Member> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/actions/{id}/memberCreator',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Get the Organization of an Action
     * Get the Organization of an Action
     * @returns Organization Success
     * @throws ApiError
     */
    public getActionsIdOrganization({
        id,
        fields,
    }: {
        /**
         * The ID of the action
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of organization fields
         */
        fields?: ('all' | Array<OrganizationFields>),
    }): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/actions/{id}/organization',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
        });
    }

    /**
     * Update a Comment Action
     * Update a comment action
     * @returns any Success
     * @throws ApiError
     */
    public putActionsIdText({
        id,
        value,
    }: {
        /**
         * The ID of the action to update
         */
        id: TrelloID,
        /**
         * The new text for the comment
         */
        value: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/actions/{id}/text',
            path: {
                'id': id,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Get Action's Reactions
     * List reactions for an action
     * @returns any Success
     * @throws ApiError
     */
    public getActionsIdactionReactions({
        idAction,
        member = true,
        emoji = true,
    }: {
        /**
         * The ID of the action
         */
        idAction: TrelloID,
        /**
         * Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)
         */
        member?: boolean,
        /**
         * Whether to load the emoji as a nested resource.
         */
        emoji?: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/actions/{idAction}/reactions',
            path: {
                'idAction': idAction,
            },
            query: {
                'member': member,
                'emoji': emoji,
            },
        });
    }

    /**
     * Create Reaction for Action
     * Adds a new reaction to an action
     * @returns any Success
     * @throws ApiError
     */
    public postActionsIdactionReactions({
        idAction,
        requestBody,
    }: {
        /**
         * The ID of the action
         */
        idAction: TrelloID,
        requestBody?: {
            /**
             * The primary `shortName` of the emoji to add. See [/emoji](#emoji)
             */
            shortName?: string;
            /**
             * The `skinVariation` of the emoji to add. See [/emoji](#emoji)
             */
            skinVariation?: string;
            /**
             * The emoji to add as a native unicode emoji. See [/emoji](#emoji)
             */
            native?: string;
            /**
             * The `unified` value of the emoji to add. See [/emoji](#emoji)
             */
            unified?: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/actions/{idAction}/reactions',
            path: {
                'idAction': idAction,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Action's Reaction
     * Get information for a reaction
     * @returns any Success
     * @throws ApiError
     */
    public getActionsIdactionReactionsId({
        idAction,
        id,
        member = true,
        emoji = true,
    }: {
        /**
         * The ID of the Action
         */
        idAction: TrelloID,
        /**
         * The ID of the reaction
         */
        id: TrelloID,
        /**
         * Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)
         */
        member?: boolean,
        /**
         * Whether to load the emoji as a nested resource.
         */
        emoji?: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/actions/{idAction}/reactions/{id}',
            path: {
                'idAction': idAction,
                'id': id,
            },
            query: {
                'member': member,
                'emoji': emoji,
            },
        });
    }

    /**
     * Delete Action's Reaction
     * Deletes a reaction
     * @returns any Success
     * @throws ApiError
     */
    public deleteActionsIdactionReactionsId({
        idAction,
        id,
    }: {
        /**
         * The ID of the Action
         */
        idAction: TrelloID,
        /**
         * The ID of the reaction
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/actions/{idAction}/reactions/{id}',
            path: {
                'idAction': idAction,
                'id': id,
            },
        });
    }

    /**
     * List Action's summary of Reactions
     * List a summary of all reactions for an action
     * @returns any Success
     * @throws ApiError
     */
    public getActionsIdactionReactionsummary({
        idAction,
    }: {
        /**
         * The ID of the action
         */
        idAction: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/actions/{idAction}/reactionsSummary',
            path: {
                'idAction': idAction,
            },
        });
    }

}
