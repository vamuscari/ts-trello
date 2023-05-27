/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Token = {
    properties: {
        id: {
            type: 'TrelloID',
        },
        identifier: {
            type: 'string',
        },
        idMember: {
            type: 'TrelloID',
        },
        dateCreated: {
            type: 'string',
            format: 'date-time',
        },
        dateExpires: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        permissions: {
            type: 'array',
            contains: {
                type: 'TokenPermission',
            },
        },
    },
} as const;
