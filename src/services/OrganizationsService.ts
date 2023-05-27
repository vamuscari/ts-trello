/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Action } from '../models/Action';
import type { Board } from '../models/Board';
import type { BoardFields } from '../models/BoardFields';
import type { Export } from '../models/Export';
import type { Member } from '../models/Member';
import type { Memberships } from '../models/Memberships';
import type { Organization } from '../models/Organization';
import type { OrganizationFields } from '../models/OrganizationFields';
import type { PluginData } from '../models/PluginData';
import type { Tag } from '../models/Tag';
import type { TrelloID } from '../models/TrelloID';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrganizationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a new Organization
     * Create a new Workspace
     * @returns any Success
     * @throws ApiError
     */
    public postOrganizations({
        displayName,
        desc,
        name,
        website,
    }: {
        /**
         * The name to display for the Organization
         */
        displayName: string,
        /**
         * The description for the organizations
         */
        desc?: string,
        /**
         * A string with a length of at least 3. Only lowercase letters, underscores, and numbers are allowed. If the name contains invalid characters, they will be removed. If the name conflicts with an existing name, a new name will be substituted.
         */
        name?: string,
        /**
         * A URL starting with `http://` or `https://`
         */
        website?: string,
    }): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations',
            query: {
                'displayName': displayName,
                'desc': desc,
                'name': name,
                'website': website,
            },
        });
    }

    /**
     * Get an Organization
     * @returns Organization Success
     * @throws ApiError
     */
    public getOrganizationsId({
        id,
    }: {
        /**
         * The ID or name of the Organization
         */
        id: TrelloID,
    }): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update an Organization
     * Update an organization
     * @returns Organization Success
     * @throws ApiError
     */
    public putOrganizationsId({
        id,
        name,
        displayName,
        desc,
        website,
        prefsAssociatedDomain,
        prefsExternalMembersDisabled,
        prefsGoogleAppsVersion,
        prefsBoardVisibilityRestrictOrg,
        prefsBoardVisibilityRestrictPrivate,
        prefsBoardVisibilityRestrictPublic,
        prefsOrgInviteRestrict,
        prefsPermissionLevel,
    }: {
        /**
         * The ID or name of the Organization
         */
        id: TrelloID,
        /**
         * A new name for the organization. At least 3 lowercase letters, underscores, and numbers. Must be unique
         */
        name?: string,
        /**
         * A new displayName for the organization. Must be at least 1 character long and not begin or end with a space.
         */
        displayName?: string,
        /**
         * A new description for the organization
         */
        desc?: string,
        /**
         * A URL starting with `http://`, `https://`, or `null`
         */
        website?: string,
        /**
         * The Google Apps domain to link this org to.
         */
        prefsAssociatedDomain?: string,
        /**
         * Whether non-workspace members can be added to boards inside the Workspace
         */
        prefsExternalMembersDisabled?: boolean,
        /**
         * `1` or `2`
         */
        prefsGoogleAppsVersion?: number,
        /**
         * Who on the Workspace can make Workspace visible boards. One of `admin`, `none`, `org`
         */
        prefsBoardVisibilityRestrictOrg?: string,
        /**
         * Who can make private boards. One of: `admin`, `none`, `org`
         */
        prefsBoardVisibilityRestrictPrivate?: string,
        /**
         * Who on the Workspace can make public boards. One of: `admin`, `none`, `org`
         */
        prefsBoardVisibilityRestrictPublic?: string,
        /**
         * An email address with optional wildcard characters. (E.g. `subdomain.*.trello.com`)
         */
        prefsOrgInviteRestrict?: string,
        /**
         * Whether the Workspace page is publicly visible. One of: `private`, `public`
         */
        prefsPermissionLevel?: string,
    }): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/organizations/{id}',
            path: {
                'id': id,
            },
            query: {
                'name': name,
                'displayName': displayName,
                'desc': desc,
                'website': website,
                'prefs/associatedDomain': prefsAssociatedDomain,
                'prefs/externalMembersDisabled': prefsExternalMembersDisabled,
                'prefs/googleAppsVersion': prefsGoogleAppsVersion,
                'prefs/boardVisibilityRestrict/org': prefsBoardVisibilityRestrictOrg,
                'prefs/boardVisibilityRestrict/private': prefsBoardVisibilityRestrictPrivate,
                'prefs/boardVisibilityRestrict/public': prefsBoardVisibilityRestrictPublic,
                'prefs/orgInviteRestrict': prefsOrgInviteRestrict,
                'prefs/permissionLevel': prefsPermissionLevel,
            },
        });
    }

    /**
     * Delete an Organization
     * Delete an Organization
     * @returns any Success
     * @throws ApiError
     */
    public deleteOrganizationsId({
        id,
    }: {
        /**
         * The ID or name of the Organization
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get field on Organization
     * @returns Organization Success
     * @throws ApiError
     */
    public getOrganizationsIdField({
        id,
        field,
    }: {
        /**
         * The ID or name of the organization
         */
        id: TrelloID,
        /**
         * An organization [field](/cloud/trello/guides/rest-api/object-definitions/)
         */
        field: OrganizationFields,
    }): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}/{field}',
            path: {
                'id': id,
                'field': field,
            },
        });
    }

    /**
     * Get Actions for Organization
     * List the actions on a Workspace
     * @returns Action Success
     * @throws ApiError
     */
    public getOrganizationsIdActions({
        id,
    }: {
        /**
         * The ID or name of the organization
         */
        id: TrelloID,
    }): CancelablePromise<Array<Action>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}/actions',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get Boards in an Organization
     * List the boards in a Workspace
     * @returns any Success
     * @throws ApiError
     */
    public getOrganizationsIdBoards({
        id,
        filter,
        fields,
    }: {
        /**
         * The ID or name of the organization
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of: `open`, `closed`, `members`, `organization`, `public`
         */
        filter?: ('all' | Array<'open' | 'closed' | 'members' | 'organization' | 'public'>),
        /**
         * `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)
         */
        fields?: ('all' | Array<BoardFields>),
    }): CancelablePromise<Array<Board>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}/boards',
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
     * Create Export for Organizations
     * Kick off CSV export for an organization
     * @returns Export Success
     * @throws ApiError
     */
    public postOrganizationsIdExports({
        id,
        attachments = true,
    }: {
        /**
         * The ID or name of the Workspace
         */
        id: TrelloID,
        /**
         * Whether the CSV should include attachments or not.
         */
        attachments?: boolean,
    }): CancelablePromise<Export> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{id}/exports',
            path: {
                'id': id,
            },
            query: {
                'attachments': attachments,
            },
        });
    }

    /**
     * Retrieve Organization's Exports
     * Retrieve the exports that exist for the given organization
     * @returns Export Success
     * @throws ApiError
     */
    public getOrganizationsIdExports({
        id,
    }: {
        /**
         * The ID or name of the Workspace
         */
        id: TrelloID,
    }): CancelablePromise<Array<Export>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}/exports',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get the Members of an Organization
     * List the members in a Workspace
     * @returns any Success
     * @throws ApiError
     */
    public getOrganizationsIdMembers({
        id,
    }: {
        /**
         * The ID or name of the Organization
         */
        id: TrelloID,
    }): CancelablePromise<Array<Member>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}/members',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update an Organization's Members
     * @returns any Success
     * @throws ApiError
     */
    public putOrganizationsIdMembers({
        id,
        email,
        fullName,
        type = 'normal',
    }: {
        /**
         * The ID or name of the organization
         */
        id: TrelloID,
        /**
         * An email address
         */
        email: string,
        /**
         * Name for the member, at least 1 character not beginning or ending with a space
         */
        fullName: string,
        /**
         * One of: `admin`, `normal`
         */
        type?: 'admin' | 'normal',
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/organizations/{id}/members',
            path: {
                'id': id,
            },
            query: {
                'email': email,
                'fullName': fullName,
                'type': type,
            },
        });
    }

    /**
     * Get Memberships of an Organization
     * List the memberships of a Workspace
     * @returns any Success
     * @throws ApiError
     */
    public getOrganizationsIdMemberships({
        id,
        filter,
        member = false,
    }: {
        /**
         * The ID or name of the organization
         */
        id: TrelloID,
        /**
         * `all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal`
         */
        filter?: ('all' | Array<'active' | 'admin' | 'deactivated' | 'me' | 'normal'>),
        /**
         * Whether to include the Member objects with the Memberships
         */
        member?: boolean,
    }): CancelablePromise<Array<Memberships>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}/memberships',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
                'member': member,
            },
        });
    }

    /**
     * Get a Membership of an Organization
     * Get a single Membership for an Organization
     * @returns any Success
     * @throws ApiError
     */
    public getOrganizationsIdMembershipsIdmembership({
        id,
        idMembership,
        member = false,
    }: {
        /**
         * The ID or name of the organization
         */
        id: TrelloID,
        /**
         * The ID of the membership to load
         */
        idMembership: TrelloID,
        /**
         * Whether to include the Member object in the response
         */
        member?: boolean,
    }): CancelablePromise<Memberships> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}/memberships/{idMembership}',
            path: {
                'id': id,
                'idMembership': idMembership,
            },
            query: {
                'member': member,
            },
        });
    }

    /**
     * Get the pluginData Scoped to Organization
     * Get organization scoped pluginData on this Workspace
     * @returns any Success
     * @throws ApiError
     */
    public getOrganizationsIdPlugindata({
        id,
    }: {
        /**
         * The ID or name of the organization
         */
        id: TrelloID,
    }): CancelablePromise<Array<PluginData>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}/pluginData',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get Tags of an Organization
     * List the organization's collections
     * @returns any Success
     * @throws ApiError
     */
    public getOrganizationsIdTags({
        id,
    }: {
        /**
         * The ID or name of the Organization
         */
        id: (string | TrelloID),
    }): CancelablePromise<Array<Tag>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}/tags',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create a Tag in Organization
     * Create a Tag in an Organization
     * @returns any Success
     * @throws ApiError
     */
    public postOrganizationsIdTags({
        id,
    }: {
        /**
         * The ID or name of the Organization
         */
        id: (string | TrelloID),
    }): CancelablePromise<Tag> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{id}/tags',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a Member of an Organization
     * Add a member to a Workspace or update their member type.
     * @returns any Success
     * @throws ApiError
     */
    public putOrganizationsIdMembersIdmember({
        id,
        idMember,
        type,
    }: {
        /**
         * The ID or name of the organization
         */
        id: TrelloID,
        /**
         * The ID or username of the member to update
         */
        idMember: (string | TrelloID),
        /**
         * One of: `admin`, `normal`
         */
        type: 'admin' | 'normal',
    }): CancelablePromise<Member> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/organizations/{id}/members/{idMember}',
            path: {
                'id': id,
                'idMember': idMember,
            },
            query: {
                'type': type,
            },
        });
    }

    /**
     * Remove a Member from an Organization
     * Remove a member from a Workspace
     * @returns any Success
     * @throws ApiError
     */
    public deleteOrganizationsIdMembers({
        id,
        idMember,
    }: {
        /**
         * The ID or name of the organization
         */
        id: (TrelloID | string),
        /**
         * The ID of the Member to remove from the Workspace
         */
        idMember: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{id}/members/{idMember}',
            path: {
                'id': id,
                'idMember': idMember,
            },
        });
    }

    /**
     * Deactivate or reactivate a member of an Organization
     * Deactivate or reactivate a member of a Workspace
     * @returns any Success
     * @throws ApiError
     */
    public putOrganizationsIdMembersIdmemberDeactivated({
        id,
        idMember,
        value,
    }: {
        /**
         * The ID or name of the organization
         */
        id: TrelloID,
        /**
         * The ID or username of the member to update
         */
        idMember: (TrelloID | string),
        value: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/organizations/{id}/members/{idMember}/deactivated',
            path: {
                'id': id,
                'idMember': idMember,
            },
            query: {
                'value': value,
            },
        });
    }

    /**
     * Update logo for an Organization
     * Set the logo image for a Workspace
     * @returns any Success
     * @throws ApiError
     */
    public postOrganizationsIdLogo({
        id,
        file,
    }: {
        /**
         * The ID or name of the Workspace
         */
        id: TrelloID,
        /**
         * Image file for the logo
         */
        file?: Blob,
    }): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/organizations/{id}/logo',
            path: {
                'id': id,
            },
            query: {
                'file': file,
            },
        });
    }

    /**
     * Delete Logo for Organization
     * Delete a the logo from a Workspace
     * @returns any Success
     * @throws ApiError
     */
    public deleteOrganizationsIdLogo({
        id,
    }: {
        /**
         * The ID or name of the organization
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{id}/logo',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Remove a Member from an Organization and all Organization Boards
     * Remove a member from a Workspace and from all Workspace boards
     * @returns any Success
     * @throws ApiError
     */
    public organizationsIdMembersIdmemberAll({
        id,
        idMember,
    }: {
        /**
         * The ID or name of the organization
         */
        id: TrelloID,
        /**
         * The ID of the member to remove from the Workspace
         */
        idMember: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{id}/members/{idMember}/all',
            path: {
                'id': id,
                'idMember': idMember,
            },
        });
    }

    /**
     * Remove the associated Google Apps domain from a Workspace
     * Remove the associated Google Apps domain from a Workspace
     * @returns any Success
     * @throws ApiError
     */
    public deleteOrganizationsIdPrefsAssociateddomain({
        id,
    }: {
        /**
         * The ID or name of the organization
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{id}/prefs/associatedDomain',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Delete the email domain restriction on who can be invited to the Workspace
     * Remove the email domain restriction on who can be invited to the Workspace
     * @returns any Success
     * @throws ApiError
     */
    public deleteOrganizationsIdPrefsOrginviterestrict({
        id,
    }: {
        /**
         * The ID or name of the organization
         */
        id: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{id}/prefs/orgInviteRestrict',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Delete an Organization's Tag
     * Delete an organization's tag
     * @returns any Success
     * @throws ApiError
     */
    public deleteOrganizationsIdTagsIdtag({
        id,
        idTag,
    }: {
        /**
         * The ID or name of the organization
         */
        id: string,
        /**
         * The ID of the tag to delete
         */
        idTag: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/organizations/{id}/tags/{idTag}',
            path: {
                'id': id,
                'idTag': idTag,
            },
        });
    }

    /**
     * Get Organizations new billable guests
     * Used to check whether the given board has new billable guests on it.
     * @returns any Success
     * @throws ApiError
     */
    public getOrganizationsIdNewbillableguestsIdboard({
        id,
        idBoard,
    }: {
        /**
         * The ID or name of the organization
         */
        id: TrelloID,
        /**
         * The ID of the board to check for new billable guests.
         */
        idBoard: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/organizations/{id}/newBillableGuests/{idBoard}',
            path: {
                'id': id,
                'idBoard': idBoard,
            },
        });
    }

}
