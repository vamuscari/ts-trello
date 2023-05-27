/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Emoji = {
    properties: {
        trello: {
            type: 'array',
            contains: {
                properties: {
                    unified: {
                        type: 'string',
                    },
                    name: {
                        type: 'string',
                    },
                    native: {
                        type: 'string',
                    },
                    shortName: {
                        type: 'string',
                    },
                    shortNames: {
                        type: 'array',
                        contains: {
                            type: 'string',
                        },
                    },
                    text: {
                        type: 'string',
                    },
                    texts: {
                        type: 'string',
                        isNullable: true,
                    },
                    category: {
                        type: 'string',
                    },
                    sheetX: {
                        type: 'number',
                    },
                    sheetY: {
                        type: 'number',
                    },
                    tts: {
                        type: 'string',
                    },
                    keywords: {
                        type: 'array',
                        contains: {
                            type: 'string',
                        },
                    },
                },
            },
        },
    },
} as const;
