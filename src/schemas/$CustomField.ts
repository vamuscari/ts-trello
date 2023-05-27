/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CustomField = {
    properties: {
        id: {
            type: 'TrelloID',
        },
        idModel: {
            type: 'string',
        },
        modelType: {
            type: 'Enum',
        },
        fieldGroup: {
            type: 'string',
        },
        display: {
            properties: {
                cardFront: {
                    type: 'boolean',
                },
                name: {
                    type: 'string',
                },
                pos: {
                    type: 'string',
                },
                options: {
                    type: 'array',
                    contains: {
                        properties: {
                            id: {
                                type: 'TrelloID',
                            },
                            idCustomField: {
                                type: 'TrelloID',
                            },
                            value: {
                                properties: {
                                    text: {
                                        type: 'string',
                                    },
                                },
                            },
                            color: {
                                type: 'string',
                            },
                            pos: {
                                type: 'number',
                            },
                        },
                    },
                },
            },
        },
        type: {
            type: 'string',
        },
    },
} as const;
