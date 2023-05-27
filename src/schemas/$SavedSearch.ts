/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SavedSearch = {
    properties: {
        id: {
            type: 'TrelloID',
        },
        name: {
            type: 'string',
        },
        query: {
            type: 'string',
        },
        pos: {
            type: 'posStringOrNumber',
        },
    },
} as const;
