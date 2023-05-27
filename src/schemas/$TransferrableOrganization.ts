/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TransferrableOrganization = {
    properties: {
        transferrable: {
            type: 'boolean',
        },
        newBillableMembers: {
            type: 'array',
            contains: {
                properties: {
                    id: {
                        type: 'TrelloID',
                    },
                    fullName: {
                        type: 'string',
                    },
                    username: {
                        type: 'string',
                    },
                    initials: {
                        type: 'string',
                    },
                    avatarHash: {
                        type: 'string',
                    },
                },
            },
        },
        restrictedMembers: {
            type: 'array',
            contains: {
                properties: {
                    id: {
                        type: 'TrelloID',
                    },
                    fullName: {
                        type: 'string',
                    },
                    username: {
                        type: 'string',
                    },
                    initials: {
                        type: 'string',
                    },
                    avatarHash: {
                        type: 'string',
                    },
                },
            },
        },
    },
} as const;
