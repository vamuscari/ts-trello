/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Board = {
    properties: {
        id: {
            type: 'TrelloID',
            isRequired: true,
        },
        name: {
            type: 'string',
            description: `The name of the board.`,
        },
        desc: {
            type: 'string',
        },
        descData: {
            type: 'string',
        },
        closed: {
            type: 'boolean',
        },
        idMemberCreator: {
            type: 'TrelloID',
        },
        idOrganization: {
            type: 'TrelloID',
        },
        pinned: {
            type: 'boolean',
        },
        url: {
            type: 'string',
            format: 'url',
        },
        shortUrl: {
            type: 'string',
            format: 'url',
        },
        prefs: {
            type: 'Prefs',
        },
        labelNames: {
            properties: {
                green: {
                    type: 'string',
                },
                yellow: {
                    type: 'string',
                },
                orange: {
                    type: 'string',
                },
                red: {
                    type: 'string',
                },
                purple: {
                    type: 'string',
                },
                blue: {
                    type: 'string',
                },
                sky: {
                    type: 'string',
                },
                lime: {
                    type: 'string',
                },
                pink: {
                    type: 'string',
                },
                black: {
                    type: 'string',
                },
            },
        },
        limits: {
            type: 'Limits',
        },
        starred: {
            type: 'boolean',
        },
        memberships: {
            type: 'string',
        },
        shortLink: {
            type: 'string',
        },
        subscribed: {
            type: 'boolean',
        },
        powerUps: {
            type: 'string',
        },
        dateLastActivity: {
            type: 'string',
            format: 'date',
        },
        dateLastView: {
            type: 'string',
            format: 'date',
        },
        idTags: {
            type: 'string',
        },
        datePluginDisable: {
            type: 'string',
            isNullable: true,
            format: 'date',
        },
        creationMethod: {
            type: 'string',
            isNullable: true,
        },
        ixUpdate: {
            type: 'number',
        },
        templateGallery: {
            type: 'string',
            isNullable: true,
        },
        enterpriseOwned: {
            type: 'boolean',
        },
    },
} as const;
