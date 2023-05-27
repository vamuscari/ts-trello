/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Label = {
    properties: {
        id: {
            type: 'TrelloID',
            description: `The ID of the label.`,
        },
        idBoard: {
            type: 'TrelloID',
            description: `The ID of the board the label is on.`,
        },
        name: {
            type: 'string',
            description: `The name displayed for the label.`,
            isNullable: true,
            maxLength: 16384,
        },
        color: {
            type: 'Color',
            description: `The color of the label. Null means no color and the label will not be shown on the front of Cards.`,
        },
    },
} as const;
