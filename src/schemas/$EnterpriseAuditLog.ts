/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EnterpriseAuditLog = {
    properties: {
        idAction: {
            type: 'TrelloID',
        },
        type: {
            type: 'string',
        },
        date: {
            type: 'string',
            format: 'date',
        },
        memberCreator: {
            properties: {
                id: {
                    type: 'TrelloID',
                },
                username: {
                    type: 'string',
                },
                fullName: {
                    type: 'string',
                },
            },
        },
        organization: {
            properties: {
                enterpriseJoinRequest: {
                    properties: {
                        idEnterprise: {
                            type: 'TrelloID',
                        },
                        idMember: {
                            type: 'TrelloID',
                        },
                        date: {
                            type: 'string',
                            format: 'date',
                        },
                    },
                    isNullable: true,
                },
                id: {
                    type: 'TrelloID',
                },
                name: {
                    type: 'string',
                },
            },
        },
        member: {
            properties: {
                id: {
                    type: 'TrelloID',
                },
                username: {
                    type: 'string',
                },
                fullName: {
                    type: 'string',
                },
            },
        },
    },
} as const;
