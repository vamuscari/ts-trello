/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CustomSticker = {
    properties: {
        id: {
            type: 'TrelloID',
        },
        url: {
            type: 'string',
            format: 'url',
        },
        scaled: {
            type: 'array',
            contains: {
                properties: {
                    id: {
                        type: 'TrelloID',
                    },
                },
            },
        },
    },
} as const;
