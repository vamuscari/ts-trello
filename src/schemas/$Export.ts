/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Export = {
    properties: {
        id: {
            type: 'TrelloID',
        },
        status: {
            properties: {
                attempts: {
                    type: 'number',
                },
                finished: {
                    type: 'boolean',
                },
                stage: {
                    type: 'string',
                },
            },
        },
        startedAt: {
            type: 'string',
            format: 'date-time',
        },
        size: {
            type: 'string',
            isNullable: true,
        },
        exportUrl: {
            type: 'string',
            isNullable: true,
        },
    },
} as const;
