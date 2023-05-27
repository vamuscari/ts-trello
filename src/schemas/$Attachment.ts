/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Attachment = {
    properties: {
        id: {
            type: 'TrelloID',
        },
        bytes: {
            type: 'string',
            isNullable: true,
        },
        date: {
            type: 'string',
            format: 'date',
        },
        edgeColor: {
            type: 'Color',
            isNullable: true,
        },
        idMember: {
            type: 'TrelloID',
        },
        isUpload: {
            type: 'boolean',
        },
        mimeType: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        previews: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        url: {
            type: 'string',
            format: 'url',
        },
        pos: {
            type: 'number',
            format: 'float',
        },
    },
} as const;
