/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TokenPermission = {
    properties: {
        idModel: {
            type: 'one-of',
            contains: [{
                type: 'TrelloID',
            }, {
                type: 'Enum',
            }],
        },
        modelType: {
            type: 'Enum',
        },
        read: {
            type: 'boolean',
        },
        write: {
            type: 'boolean',
        },
    },
} as const;
