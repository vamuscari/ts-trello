/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Webhook = {
    properties: {
        id: {
            type: 'TrelloID',
        },
        description: {
            type: 'string',
        },
        idModel: {
            type: 'TrelloID',
        },
        callbackURL: {
            type: 'string',
            format: 'url',
        },
        active: {
            type: 'boolean',
        },
        consecutiveFailures: {
            type: 'number',
        },
        firstConsecutiveFailDate: {
            type: 'string',
            isNullable: true,
            format: 'date',
        },
    },
} as const;
