/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Action = {
    properties: {
        id: {
            type: 'TrelloID',
        },
        idMemberCreator: {
            type: 'TrelloID',
        },
        data: {
            properties: {
                text: {
                    type: 'string',
                },
                card: {
                    properties: {
                        id: {
                            type: 'TrelloID',
                        },
                        name: {
                            type: 'string',
                        },
                        idShort: {
                            type: 'number',
                        },
                        shortLink: {
                            type: 'string',
                        },
                    },
                },
                board: {
                    properties: {
                        id: {
                            type: 'TrelloID',
                        },
                        name: {
                            type: 'string',
                        },
                        shortLink: {
                            type: 'string',
                        },
                    },
                },
                list: {
                    properties: {
                        id: {
                            type: 'TrelloID',
                        },
                        name: {
                            type: 'string',
                        },
                    },
                },
            },
        },
        type: {
            type: 'string',
        },
        date: {
            type: 'string',
            format: 'date-time',
        },
        limits: {
            properties: {
                reactions: {
                    properties: {
                        perAction: {
                            properties: {
                                status: {
                                    type: 'string',
                                },
                                disableAt: {
                                    type: 'number',
                                },
                                warnAt: {
                                    type: 'number',
                                },
                            },
                        },
                        uniquePerAction: {
                            properties: {
                                status: {
                                    type: 'string',
                                },
                                disableAt: {
                                    type: 'number',
                                },
                                warnAt: {
                                    type: 'number',
                                },
                            },
                        },
                    },
                },
            },
        },
        display: {
            properties: {
                translationKey: {
                    type: 'string',
                },
                entities: {
                    properties: {
                        contextOn: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                translationKey: {
                                    type: 'string',
                                },
                                hideIfContext: {
                                    type: 'boolean',
                                },
                                idContext: {
                                    type: 'TrelloID',
                                },
                            },
                        },
                        card: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                hideIfContext: {
                                    type: 'boolean',
                                },
                                id: {
                                    type: 'TrelloID',
                                },
                                shortLink: {
                                    type: 'string',
                                },
                                text: {
                                    type: 'string',
                                },
                            },
                        },
                        comment: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                text: {
                                    type: 'string',
                                },
                            },
                        },
                        memberCreator: {
                            properties: {
                                type: {
                                    type: 'string',
                                },
                                id: {
                                    type: 'TrelloID',
                                },
                                username: {
                                    type: 'string',
                                },
                                text: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
        },
        memberCreator: {
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
                fullName: {
                    type: 'string',
                },
                idMemberReferrer: {
                    type: 'TrelloID',
                    isNullable: true,
                },
                initials: {
                    type: 'string',
                },
                username: {
                    type: 'string',
                },
            },
        },
    },
} as const;
