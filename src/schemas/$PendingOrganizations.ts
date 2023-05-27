/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PendingOrganizations = {
    properties: {
        id: {
            type: 'TrelloID',
        },
        idMember: {
            type: 'TrelloID',
        },
        memberRequestor: {
            properties: {
                id: {
                    type: 'TrelloID',
                },
                fullName: {
                    type: 'string',
                },
            },
        },
        date: {
            type: 'string',
            format: 'date',
        },
        displayName: {
            type: 'string',
        },
        membershipCount: {
            type: 'number',
        },
        logoUrl: {
            type: 'string',
            isNullable: true,
        },
        transferability: {
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
        },
    },
} as const;
