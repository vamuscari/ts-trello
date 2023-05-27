/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckItem = {
    properties: {
        idChecklist: {
            type: 'TrelloID',
        },
        state: {
            type: 'Enum',
        },
        id: {
            type: 'TrelloID',
        },
        name: {
            type: 'string',
        },
        nameData: {
            type: 'string',
            isNullable: true,
        },
        pos: {
            type: 'string',
        },
    },
} as const;
