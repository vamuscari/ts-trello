/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoardFields } from '../models/BoardFields';
import type { ClaimableOrganizations } from '../models/ClaimableOrganizations';
import type { Enterprise } from '../models/Enterprise';
import type { EnterpriseAdmin } from '../models/EnterpriseAdmin';
import type { EnterpriseAuditLog } from '../models/EnterpriseAuditLog';
import type { Error } from '../models/Error';
import type { Member } from '../models/Member';
import type { MemberFields } from '../models/MemberFields';
import type { Organization } from '../models/Organization';
import type { OrganizationFields } from '../models/OrganizationFields';
import type { PendingOrganizations } from '../models/PendingOrganizations';
import type { TransferrableOrganization } from '../models/TransferrableOrganization';
import type { TrelloID } from '../models/TrelloID';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EnterprisesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get an Enterprise
     * Get an enterprise by its ID.
     * @returns Enterprise Success
     * @throws ApiError
     */
    public getEnterprisesId({
        id,
        fields = 'all',
        members = 'none',
        memberFields = 'avatarHash, fullName, initials, username',
        memberFilter = 'none',
        memberSort,
        memberSortBy = 'none',
        memberSortOrder = 'id',
        memberStartIndex = 1,
        memberCount = 10,
        organizations = 'none',
        organizationFields = 'none',
        organizationPaidAccounts = false,
        organizationMemberships = 'none',
    }: {
        /**
         * ID of the enterprise to retrieve.
         */
        id: TrelloID,
        /**
         * Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data. Read the SCIM documentation [here]() for more information on filtering), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations`
         */
        fields?: string,
        /**
         * One of: `none`, `normal`, `admins`, `owners`, `all`
         */
        members?: string,
        /**
         * One of: `avatarHash`, `fullName`, `initials`, `username`
         */
        memberFields?: string,
        /**
         * Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array will be paginated.
         */
        memberFilter?: string,
        /**
         * This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
         */
        memberSort?: string,
        /**
         * Deprecated: Please use member_sort. This parameter expects a [SCIM-style sorting value](/cloud/trello/scim/). Note that the members array returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and the API response's header will contain the total count and pagination state.
         */
        memberSortBy?: string,
        /**
         * Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc`
         */
        memberSortOrder?: string,
        /**
         * Any integer between 0 and 100.
         */
        memberStartIndex?: number,
        /**
         * 0 to 100
         */
        memberCount?: number,
        /**
         * One of: `none`, `members`, `public`, `all`
         */
        organizations?: string,
        /**
         * Any valid value that the [nested organization field resource]() accepts.
         */
        organizationFields?: string,
        /**
         * Whether or not to include paid account information in the returned workspace objects
         */
        organizationPaidAccounts?: boolean,
        /**
         * Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated`
         */
        organizationMemberships?: string,
    }): CancelablePromise<Enterprise> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/enterprises/{id}',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'members': members,
                'member_fields': memberFields,
                'member_filter': memberFilter,
                'member_sort': memberSort,
                'member_sortBy': memberSortBy,
                'member_sortOrder': memberSortOrder,
                'member_startIndex': memberStartIndex,
                'member_count': memberCount,
                'organizations': organizations,
                'organization_fields': organizationFields,
                'organization_paid_accounts': organizationPaidAccounts,
                'organization_memberships': organizationMemberships,
            },
        });
    }

    /**
     * Get auditlog data for an Enterprise
     * Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from an Enterprise's audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is required for this route.
     *
     * NOTE: For enterprises that have opted in to user management via AdminHub, the auditlog will will contain actions taken in AdminHub, but may not contain the source for those actions.
     * @returns EnterpriseAuditLog Success
     * @throws ApiError
     */
    public getEnterprisesIdAuditlog({
        id,
    }: {
        /**
         * ID of the enterprise to retrieve.
         */
        id: TrelloID,
    }): CancelablePromise<Array<EnterpriseAuditLog>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/enterprises/{id}/auditlog',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get Enterprise admin Members
     * Get an enterprise's admin members.
     * @returns EnterpriseAdmin Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public getEnterprisesIdAdmins({
        id,
        fields = 'fullName, userName',
    }: {
        /**
         * ID of the enterprise to retrieve.
         */
        id: TrelloID,
        /**
         * Any valid value that the [nested member field resource]() accepts.
         */
        fields?: string,
    }): CancelablePromise<EnterpriseAdmin | Error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/enterprises/{id}/admins',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
            },
            errors: {
                401: `Unauthorized`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Get signupUrl for Enterprise
     * Get the signup URL for an enterprise.
     * @returns any Success
     * @throws ApiError
     */
    public getEnterprisesIdSignupurl({
        id,
        authenticate = false,
        confirmationAccepted = false,
        returnUrl = null,
        tosAccepted = false,
    }: {
        /**
         * ID of the enterprise to retrieve.
         */
        id: TrelloID,
        authenticate?: boolean,
        confirmationAccepted?: boolean,
        /**
         * Any valid URL.
         */
        returnUrl?: string | null,
        /**
         * Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup page/their IdP.
         */
        tosAccepted?: boolean,
    }): CancelablePromise<{
        signupUrl?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/enterprises/{id}/signupUrl',
            path: {
                'id': id,
            },
            query: {
                'authenticate': authenticate,
                'confirmationAccepted': confirmationAccepted,
                'returnUrl': returnUrl,
                'tosAccepted': tosAccepted,
            },
        });
    }

    /**
     * Get Members of Enterprise
     * Get the members of an enterprise.
     * @returns Member Success
     * @throws ApiError
     */
    public getEnterprisesIdMembers({
        id,
        fields = 'avatarHash, fullName, initials, username',
        filter,
        sort,
        sortBy,
        sortOrder = null,
        startIndex,
        count = 'none',
        organizationFields = 'displayName',
        boardFields = 'name',
    }: {
        /**
         * ID of the Enterprise to retrieve.
         */
        id: TrelloID,
        /**
         * A comma-seperated list of valid [member fields](/cloud/trello/guides/rest-api/object-definitions/#member-object).
         */
        fields?: string,
        /**
         * Pass a [SCIM-style query](/cloud/trello/scim/) to filter members. This takes precedence over the all/normal/admins value of members. If any of the below member_* args are set, the member array will be paginated.
         */
        filter?: string | null,
        /**
         * This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
         */
        sort?: string,
        /**
         * Deprecated: Please use `sort` instead. This parameter expects a [SCIM-style](/cloud/trello/scim/) sorting value. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.
         */
        sortBy?: string,
        /**
         * Deprecated: Please use `sort` instead. One of: `ascending`, `descending`, `asc`, `desc`.
         */
        sortOrder?: 'ascending' | 'descending' | 'asc' | 'desc' | null,
        /**
         * Any integer between 0 and 9999.
         */
        startIndex?: number,
        /**
         * [SCIM-style filter](/cloud/trello/scim/).
         */
        count?: string,
        /**
         * Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
         */
        organizationFields?: string,
        /**
         * Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
         */
        boardFields?: string,
    }): CancelablePromise<Array<Member>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/enterprises/{id}/members',
            path: {
                'id': id,
            },
            query: {
                'fields': fields,
                'filter': filter,
                'sort': sort,
                'sortBy': sortBy,
                'sortOrder': sortOrder,
                'startIndex': startIndex,
                'count': count,
                'organization_fields': organizationFields,
                'board_fields': boardFields,
            },
        });
    }

    /**
     * Get a Member of Enterprise
     * Get a specific member of an enterprise by ID.
     * @returns Member Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public getEnterprisesIdMembersIdmember({
        id,
        idMember,
        fields = 'avatarHash, fullName, initials, username',
        organizationFields = 'displayName',
        boardFields = 'name',
    }: {
        /**
         * ID of the enterprise to retrieve.
         */
        id: TrelloID,
        /**
         * An ID of a member resource.
         */
        idMember: TrelloID,
        /**
         * A comma separated list of any valid values that the [nested member field resource]() accepts.
         */
        fields?: string,
        /**
         * Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
         */
        organizationFields?: string,
        /**
         * Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
         */
        boardFields?: string,
    }): CancelablePromise<Member | Error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/enterprises/{id}/members/{idMember}',
            path: {
                'id': id,
                'idMember': idMember,
            },
            query: {
                'fields': fields,
                'organization_fields': organizationFields,
                'board_fields': boardFields,
            },
            errors: {
                401: `Unauthorized`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Get whether an organization can be transferred to an enterprise.
     * Get whether an organization can be transferred to an enterprise.
     * @returns TransferrableOrganization Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public getEnterprisesIdTransferrableOrganizationIdOrganization({
        id,
        idOrganization,
    }: {
        /**
         * ID of the Enterprise to retrieve.
         */
        id: TrelloID,
        /**
         * An ID of an Organization resource.
         */
        idOrganization: TrelloID,
    }): CancelablePromise<TransferrableOrganization | Error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/enterprises/{id}/transferrable/organization/{idOrganization}',
            path: {
                'id': id,
                'idOrganization': idOrganization,
            },
            errors: {
                401: `Unauthorized`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Get a bulk list of organizations that can be transferred to an enterprise.
     * Get a list of organizations that can be transferred to an enterprise when given a bulk list of organizations.
     * @returns any Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public getEnterprisesIdTransferrableBulkIdOrganizations({
        id,
        idOrganizations,
    }: {
        /**
         * ID of the Enterprise to retrieve.
         */
        id: TrelloID,
        /**
         * An array of IDs of an Organization resource.
         */
        idOrganizations: Array<Organization>,
    }): CancelablePromise<Array<TransferrableOrganization> | Error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/enterprises/{id}/transferrable/bulk/{idOrganizations}',
            path: {
                'id': id,
                'idOrganizations': idOrganizations,
            },
            errors: {
                401: `Unauthorized`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Decline enterpriseJoinRequests from one organization or a bulk list of organizations.
     * Decline enterpriseJoinRequests from one organization or bulk amount of organizations
     * @returns any Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public putEnterprisesIdEnterpriseJoinRequestBulk({
        id,
        idOrganizations,
    }: {
        /**
         * ID of the Enterprise to retrieve.
         */
        id: TrelloID,
        /**
         * An array of IDs of an Organization resource.
         */
        idOrganizations: Array<Organization>,
    }): CancelablePromise<any | Error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/enterprises/${id}/enterpriseJoinRequest/bulk',
            path: {
                'id': id,
            },
            query: {
                'idOrganizations': idOrganizations,
            },
            errors: {
                401: `Unauthorized`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Get ClaimableOrganizations of an Enterprise
     * Get the Workspaces that are claimable by the enterprise by ID. Can optionally query for workspaces based on activeness/ inactiveness.
     * @returns ClaimableOrganizations Success
     * @returns Error Unexpected erorr
     * @throws ApiError
     */
    public getEnterprisesIdClaimableOrganizations({
        id,
        limit,
        cursor,
        name,
        activeSince,
        inactiveSince,
    }: {
        /**
         * ID of the enterprise to retrieve
         */
        id: TrelloID,
        /**
         * Limits the number of workspaces to be sorted
         */
        limit?: number,
        /**
         * Specifies the sort order to return matching documents
         */
        cursor?: string,
        /**
         * Name of the enterprise to retrieve workspaces for
         */
        name?: string,
        /**
         * Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace
         */
        activeSince?: string,
        /**
         * Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace
         */
        inactiveSince?: string,
    }): CancelablePromise<ClaimableOrganizations | Error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/enterprises/{id}/claimableOrganizations',
            path: {
                'id': id,
            },
            query: {
                'limit': limit,
                'cursor': cursor,
                'name': name,
                'activeSince': activeSince,
                'inactiveSince': inactiveSince,
            },
            errors: {
                401: `Unauthorized`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Get PendingOrganizations of an Enterprise
     * Get the Workspaces that are pending for the enterprise by ID.
     * @returns PendingOrganizations Success
     * @returns Error Unexpected erorr
     * @throws ApiError
     */
    public getEnterprisesIdPendingOrganizations({
        id,
        activeSince,
        inactiveSince,
    }: {
        /**
         * ID of the enterprise to retrieve
         */
        id: TrelloID,
        /**
         * Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace
         */
        activeSince?: string,
        /**
         * Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace
         */
        inactiveSince?: string,
    }): CancelablePromise<Array<PendingOrganizations> | Error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/enterprises/{id}/pendingOrganizations',
            path: {
                'id': id,
            },
            query: {
                'activeSince': activeSince,
                'inactiveSince': inactiveSince,
            },
            errors: {
                401: `Unauthorized`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Create an auth Token for an Enterprise.
     * Create an auth Token for an Enterprise.
     * @returns any Success
     * @throws ApiError
     */
    public postEnterprisesIdTokens({
        id,
        expiration = 'none',
    }: {
        /**
         * ID of the enterprise to retrieve.
         */
        id: string,
        /**
         * One of: `1hour`, `1day`, `30days`, `never`
         */
        expiration?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/enterprises/{id}/tokens',
            path: {
                'id': id,
            },
            query: {
                'expiration': expiration,
            },
        });
    }

    /**
     * Transfer an Organization to an Enterprise.
     * Transfer an organization to an enterprise.
     *
     * NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in the organization being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not indicate successful addition to the enterprise.
     * @returns any Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public putEnterprisesIdOrganizations({
        id,
        idOrganization,
    }: {
        /**
         * ID of the Enterprise to retrieve.
         */
        id: TrelloID,
        /**
         * ID of Organization to be transferred to Enterprise.
         */
        idOrganization: string,
    }): CancelablePromise<Array<Organization> | Error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/enterprises/{id}/organizations',
            path: {
                'id': id,
            },
            query: {
                'idOrganization': idOrganization,
            },
            errors: {
                401: `Unauthorized`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Update a Member's licensed status
     * This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or not. Revoking a license will deactivate a Member of an Enterprise.
     *
     * NOTE: Revoking of licenses is not possible for enterprises that have opted in to user management via AdminHub.
     * @returns Member Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public putEnterprisesIdMembersIdmemberLicensed({
        id,
        idMember,
        value,
    }: {
        /**
         * ID of the Enterprise.
         */
        id: TrelloID,
        /**
         * The ID of the Member
         */
        idMember: TrelloID,
        /**
         * Boolean value to determine whether the user should be given an Enterprise license (true) or not (false).
         */
        value: boolean,
    }): CancelablePromise<Member | Error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/enterprises/{id}/members/{idMember}/licensed',
            path: {
                'id': id,
                'idMember': idMember,
            },
            query: {
                'value': value,
            },
            errors: {
                401: `Unauthorized`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Deactivate a Member of an Enterprise.
     * Deactivate a Member of an Enterprise.
     *
     * NOTE: Deactivation is not possible for enterprises that have opted in to user management via AdminHub.
     * @returns any Success
     * @throws ApiError
     */
    public enterprisesIdMembersIdMemberDeactivated({
        id,
        idMember,
        value,
        fields,
        organizationFields = 'name',
        boardFields = 'name',
    }: {
        /**
         * ID of the enterprise to retrieve.
         */
        id: TrelloID,
        /**
         * ID of the Member to deactive.
         */
        idMember: TrelloID,
        /**
         * Determines whether the user is deactivated or not.
         */
        value: boolean,
        /**
         * A comma separated list of any valid values that the [nested member field resource]() accepts.
         */
        fields?: Array<MemberFields>,
        /**
         * Any valid value that the [nested organization resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
         */
        organizationFields?: OrganizationFields,
        /**
         * Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.
         */
        boardFields?: BoardFields,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/enterprises/{id}/members/{idMember}/deactivated',
            path: {
                'id': id,
                'idMember': idMember,
            },
            query: {
                'value': value,
                'fields': fields,
                'organization_fields': organizationFields,
                'board_fields': boardFields,
            },
        });
    }

    /**
     * Update Member to be admin of Enterprise
     * Make Member an admin of Enterprise.
     *
     * NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.
     * @returns any Success
     * @throws ApiError
     */
    public putEnterprisesIdAdminsIdmember({
        id,
        idMember,
    }: {
        /**
         * ID of the enterprise to retrieve.
         */
        id: TrelloID,
        /**
         * ID of member to be made an admin of enterprise.
         */
        idMember: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/enterprises/{id}/admins/{idMember}',
            path: {
                'id': id,
                'idMember': idMember,
            },
        });
    }

    /**
     * Remove a Member as admin from Enterprise.
     * Remove a member as admin from an enterprise.
     *
     * NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.
     * @returns any Success
     * @throws ApiError
     */
    public enterprisesIdOrganizationsIdmember({
        id,
        idMember,
    }: {
        /**
         * ID of the Enterprise to retrieve.
         */
        id: TrelloID,
        /**
         * ID of the member to be removed as an admin from enterprise.
         */
        idMember: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/enterprises/{id}/admins/{idMember}',
            path: {
                'id': id,
                'idMember': idMember,
            },
        });
    }

    /**
     * Delete an Organization from an Enterprise.
     * Remove an organization from an enterprise.
     * @returns any Success
     * @throws ApiError
     */
    public deleteEnterprisesIdOrganizationsIdorg({
        id,
        idOrg,
    }: {
        /**
         * ID of the enterprise to retrieve.
         */
        id: TrelloID,
        /**
         * ID of the organization to be removed from the enterprise.
         */
        idOrg: TrelloID,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/enterprises/{id}/organizations/{idOrg}',
            path: {
                'id': id,
                'idOrg': idOrg,
            },
        });
    }

    /**
     * Bulk accept a set of organizations to an Enterprise.
     * Accept an array of organizations to an enterprise.
     *
     * NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in organizations being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not indicate successful addition to the enterprise.
     * @returns any Success
     * @returns Error Unexpected Error
     * @throws ApiError
     */
    public getEnterprisesIdOrganizationsBulkIdOrganizations({
        id,
        idOrganizations,
    }: {
        /**
         * ID of the enterprise to retrieve.
         */
        id: TrelloID,
        /**
         * An array of IDs of the organizations to be removed from the enterprise.
         */
        idOrganizations: Array<Organization>,
    }): CancelablePromise<any | Error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/enterprises/{id}/organizations/bulk/{idOrganizations}',
            path: {
                'id': id,
                'idOrganizations': idOrganizations,
            },
            errors: {
                401: `Unauthorized`,
                404: `The specified resource was not found`,
            },
        });
    }

}
