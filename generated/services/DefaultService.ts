/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { Member } from '../models/Member';
import type { TrelloID } from '../models/TrelloID';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DefaultService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Update a Member's licensed status
     * This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or not. Revoking a license will deactivate a Member of an Enterprise.
     *
     * NOTE: Revoking of licenses is not possible for enterprises that have opted in to user management via AdminHub.
     * @param id ID of the Enterprise.
     * @param idMember The ID of the Member
     * @param value Boolean value to determine whether the user should be given an Enterprise license (true) or not (false).
     * @returns Member Success
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public putEnterprisesIdMembersIdmemberLicensed(
        id: TrelloID,
        idMember: TrelloID,
        value: boolean,
    ): CancelablePromise<Member | Error> {
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

}
