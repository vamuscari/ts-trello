/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ClaimableOrganizations = {
    properties: {
        organizations: {
            type: 'array',
            contains: {
                properties: {
                    name: {
                        type: 'string',
                    },
                    displayName: {
                        type: 'string',
                    },
                    activeMembershipCount: {
                        type: 'number',
                    },
                    idActiveAdmins: {
                        type: 'array',
                        contains: {
                            type: 'TrelloID',
                        },
                    },
                    products: {
                        type: 'array',
                        contains: {
                            type: 'number',
                            format: 'integer',
                        },
                    },
                    id: {
                        type: 'TrelloID',
                    },
                    logoUrl: {
                        type: 'string',
                        isNullable: true,
                    },
                    dateLastActive: {
                        type: 'string',
                        description: `The date of the most recent activity on any of the boards in the workspace. If the workspace has no boards, or the boards have no activity, this value will be null.`,
                        isNullable: true,
                        format: 'date',
                    },
                },
            },
        },
        claimableCount: {
            type: 'number',
        },
    },
} as const;
