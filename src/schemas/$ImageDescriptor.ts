/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ImageDescriptor = {
    properties: {
        width: {
            type: 'number',
            description: `The width of the image.`,
        },
        height: {
            type: 'number',
            description: `The height of the image.`,
        },
        url: {
            type: 'string',
            description: `The URL of the image.`,
            format: 'url',
        },
    },
} as const;
