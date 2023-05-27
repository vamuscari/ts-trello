/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Member = {
    properties: {
        id: {
            type: 'TrelloID',
        },
        activityBlocked: {
            type: 'boolean',
        },
        avatarHash: {
            type: 'string',
        },
        avatarUrl: {
            type: 'string',
            format: 'url',
        },
        bio: {
            type: 'string',
        },
        bioData: {
            properties: {
                emoji: {
                    type: 'dictionary',
                    contains: {
                        properties: {
                        },
                    },
                },
            },
        },
        confirmed: {
            type: 'boolean',
        },
        fullName: {
            type: 'string',
        },
        idEnterprise: {
            type: 'TrelloID',
        },
        idEnterprisesDeactivated: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        idMemberReferrer: {
            type: 'TrelloID',
            isNullable: true,
        },
        idPremOrgsAdmin: {
            type: 'array',
            contains: {
                type: 'TrelloID',
            },
        },
        initials: {
            type: 'string',
        },
        memberType: {
            type: 'Enum',
        },
        nonPublic: {
            description: `Profile data with restricted visibility. These fields are visible only to members of the
            same organization. The values here (full name, for example) may differ from the values
            at the top level of the response.
            `,
            properties: {
                fullName: {
                    type: 'string',
                },
                initials: {
                    type: 'string',
                },
                avatarUrl: {
                    type: 'string',
                    description: `A URL that references the non-public avatar for the member`,
                    format: 'url',
                },
                avatarHash: {
                    type: 'string',
                },
            },
        },
        nonPublicAvailable: {
            type: 'boolean',
            description: `Whether the response contains non-public profile data for the member`,
        },
        products: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
        url: {
            type: 'string',
            format: 'url',
        },
        username: {
            type: 'string',
        },
        status: {
            type: 'Enum',
        },
        aaEmail: {
            type: 'string',
            isNullable: true,
            format: 'email',
        },
        aaEnrolledDate: {
            type: 'string',
            isNullable: true,
        },
        aaId: {
            type: 'string',
            isNullable: true,
        },
        avatarSource: {
            type: 'Enum',
        },
        email: {
            type: 'string',
        },
        gravatarHash: {
            type: 'string',
        },
        idBoards: {
            type: 'array',
            contains: {
                type: 'TrelloID',
            },
        },
        idOrganizations: {
            type: 'array',
            contains: {
                type: 'TrelloID',
            },
        },
        idEnterprisesAdmin: {
            type: 'array',
            contains: {
                type: 'TrelloID',
            },
        },
        limits: {
            type: 'LimitsObject',
        },
        loginTypes: {
            type: 'array',
            contains: {
                type: 'Enum',
            },
        },
        marketingOptIn: {
            properties: {
                optedIn: {
                    type: 'boolean',
                },
                date: {
                    type: 'string',
                    format: 'date',
                },
            },
        },
        messagesDismissed: {
            properties: {
                name: {
                    type: 'string',
                },
                count: {
                    type: 'string',
                },
                lastDismissed: {
                    type: 'string',
                    format: 'date',
                },
                _id: {
                    type: 'TrelloID',
                },
            },
        },
        oneTimeMessagesDismissed: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        prefs: {
            type: 'MemberPrefs',
        },
        trophies: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        uploadedAvatarHash: {
            type: 'string',
        },
        uploadedAvatarUrl: {
            type: 'string',
            format: 'url',
        },
        premiumFeatures: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        isAaMastered: {
            type: 'boolean',
        },
        ixUpdate: {
            type: 'number',
        },
        idBoardsPinned: {
            type: 'array',
            contains: {
                type: 'TrelloID',
            },
            isNullable: true,
        },
    },
} as const;
