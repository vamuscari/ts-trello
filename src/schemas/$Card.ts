/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Card = {
    properties: {
        id: {
            type: 'TrelloID',
        },
        address: {
            type: 'string',
            isNullable: true,
        },
        badges: {
            properties: {
                attachmentsByType: {
                    properties: {
                        trello: {
                            properties: {
                                board: {
                                    type: 'number',
                                },
                                card: {
                                    type: 'number',
                                },
                            },
                        },
                    },
                },
                location: {
                    type: 'boolean',
                },
                votes: {
                    type: 'number',
                },
                viewingMemberVoted: {
                    type: 'boolean',
                },
                subscribed: {
                    type: 'boolean',
                },
                fogbugz: {
                    type: 'string',
                },
                checkItems: {
                    type: 'number',
                },
                checkItemsChecked: {
                    type: 'number',
                },
                comments: {
                    type: 'number',
                },
                attachments: {
                    type: 'number',
                },
                description: {
                    type: 'boolean',
                },
                due: {
                    type: 'string',
                    isNullable: true,
                    format: 'date',
                },
                start: {
                    type: 'string',
                    isNullable: true,
                    format: 'date',
                },
                dueComplete: {
                    type: 'boolean',
                },
            },
        },
        checkItemStates: {
            type: 'array',
            contains: {
                type: 'one-of',
                contains: [{
                    type: 'string',
                }],
            },
        },
        closed: {
            type: 'boolean',
        },
        coordinates: {
            type: 'string',
            isNullable: true,
        },
        creationMethod: {
            type: 'string',
            isNullable: true,
        },
        dateLastActivity: {
            type: 'string',
            format: 'date-time',
        },
        desc: {
            type: 'string',
        },
        descData: {
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
        due: {
            type: 'string',
            isNullable: true,
            format: 'date',
        },
        dueReminder: {
            type: 'string',
            isNullable: true,
        },
        email: {
            type: 'string',
            format: 'email',
        },
        idBoard: {
            type: 'TrelloID',
        },
        idChecklists: {
            type: 'array',
            contains: {
                type: 'one-of',
                contains: [{
                    type: 'Checklist',
                }, {
                    type: 'TrelloID',
                }],
            },
        },
        idLabels: {
            type: 'array',
            contains: {
                type: 'one-of',
                contains: [{
                    type: 'Label',
                }, {
                    type: 'TrelloID',
                }],
            },
        },
        idList: {
            type: 'TrelloID',
        },
        idMembers: {
            type: 'array',
            contains: {
                type: 'one-of',
                contains: [{
                    type: 'TrelloID',
                }],
            },
        },
        idMembersVoted: {
            type: 'array',
            contains: {
                type: 'one-of',
                contains: [{
                    type: 'TrelloID',
                }],
            },
        },
        idShort: {
            type: 'number',
        },
        idAttachmentCover: {
            type: 'TrelloID',
            isNullable: true,
        },
        labels: {
            type: 'array',
            contains: {
                type: 'one-of',
                contains: [{
                    type: 'TrelloID',
                }],
            },
        },
        limits: {
            type: 'Limits',
        },
        locationName: {
            type: 'string',
            isNullable: true,
        },
        manualCoverAttachment: {
            type: 'boolean',
        },
        name: {
            type: 'string',
        },
        pos: {
            type: 'number',
            format: 'float',
        },
        shortLink: {
            type: 'string',
        },
        shortUrl: {
            type: 'string',
            format: 'url',
        },
        subscribed: {
            type: 'boolean',
        },
        url: {
            type: 'string',
            format: 'url',
        },
        cover: {
            properties: {
                idAttachment: {
                    type: 'TrelloID',
                    isNullable: true,
                },
                color: {
                    type: 'Color',
                    isNullable: true,
                },
                idUploadedBackground: {
                    type: 'boolean',
                    isNullable: true,
                },
                size: {
                    type: 'Enum',
                },
                brightness: {
                    type: 'Enum',
                },
                isTemplate: {
                    type: 'boolean',
                },
            },
        },
    },
} as const;
