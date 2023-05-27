/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Prefs = {
    properties: {
        permissionLevel: {
            type: 'Enum',
        },
        hideVotes: {
            type: 'boolean',
        },
        voting: {
            type: 'Enum',
        },
        comments: {
            type: 'string',
        },
        invitations: {
            type: 'Enum',
        },
        selfJoin: {
            type: 'boolean',
        },
        cardCovers: {
            type: 'boolean',
        },
        isTemplate: {
            type: 'boolean',
        },
        cardAging: {
            type: 'CardAging',
        },
        calendarFeedEnabled: {
            type: 'boolean',
        },
        background: {
            type: 'TrelloID',
        },
        backgroundImage: {
            type: 'string',
            format: 'uri',
        },
        backgroundImageScaled: {
            type: 'array',
            contains: {
                type: 'ImageDescriptor',
            },
        },
        backgroundTile: {
            type: 'boolean',
        },
        backgroundBrightness: {
            type: 'string',
        },
        backgroundBottomColor: {
            type: 'string',
        },
        backgroundTopColor: {
            type: 'string',
        },
        canBePublic: {
            type: 'boolean',
        },
        canBeEnterprise: {
            type: 'boolean',
        },
        canBeOrg: {
            type: 'boolean',
        },
        canBePrivate: {
            type: 'boolean',
        },
        canInvite: {
            type: 'boolean',
        },
    },
} as const;
