/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CustomFieldItems = {
    properties: {
        id: {
            type: 'TrelloID',
        },
        value: {
            properties: {
                checked: {
                    type: 'string',
                },
            },
        },
        idCustomField: {
            type: 'TrelloID',
        },
        idModel: {
            type: 'TrelloID',
        },
        modelType: {
            type: 'Enum',
        },
    },
} as const;
