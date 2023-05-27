/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TrelloList = {
    properties: {
        id: {
            type: 'TrelloID',
        },
        name: {
            type: 'string',
            description: `The name of the list`,
        },
        closed: {
            type: 'boolean',
        },
        pos: {
            type: 'number',
        },
        softLimit: {
            type: 'string',
        },
        idBoard: {
            type: 'string',
        },
        subscribed: {
            type: 'boolean',
        },
        limits: {
            type: 'Limits',
        },
    },
} as const;
