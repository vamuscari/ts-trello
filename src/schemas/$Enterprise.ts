/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Enterprise = {
    properties: {
        id: {
            type: 'TrelloID',
        },
        name: {
            type: 'string',
        },
        displayName: {
            type: 'string',
        },
        logoHash: {
            type: 'string',
            isNullable: true,
        },
        logoUrl: {
            type: 'string',
            isNullable: true,
        },
        prefs: {
            properties: {
                ssoOnly: {
                    type: 'boolean',
                },
                signup: {
                    properties: {
                        banner: {
                            type: 'string',
                        },
                        bannerHtml: {
                            type: 'string',
                        },
                    },
                },
                mandatoryTransferDate: {
                    type: 'string',
                    isNullable: true,
                    format: 'date',
                },
                brandingColor: {
                    type: 'string',
                },
                autoJoinOrganizations: {
                    type: 'boolean',
                },
                notifications: {
                    type: 'dictionary',
                    contains: {
                        properties: {
                        },
                    },
                },
                maxMembers: {
                    type: 'number',
                    isNullable: true,
                },
            },
        },
        organizationPrefs: {
            properties: {
                boardVisibilityRestrict: {
                    type: 'dictionary',
                    contains: {
                        properties: {
                        },
                    },
                },
                boardDeleteRestrict: {
                    type: 'dictionary',
                    contains: {
                        properties: {
                        },
                    },
                },
                attachmentRestrictions: {
                    type: 'array',
                    contains: {
                        type: 'Enum',
                    },
                },
            },
        },
        ssoActivationFailed: {
            type: 'boolean',
        },
        idAdmins: {
            type: 'array',
            contains: {
                type: 'TrelloID',
            },
        },
        enterpriseDomains: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'url',
            },
        },
        isRealEnterprise: {
            type: 'boolean',
        },
        pluginWhitelistingEnabled: {
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
        products: {
            type: 'array',
            contains: {
                type: 'number',
                format: 'integer',
            },
        },
        licenses: {
            properties: {
                maxMembers: {
                    type: 'number',
                    isNullable: true,
                    format: 'integer',
                },
                totalMembers: {
                    type: 'number',
                    format: 'integer',
                },
                relatedEnterprises: {
                    type: 'array',
                    contains: {
                        properties: {
                            name: {
                                type: 'string',
                            },
                            displayName: {
                                type: 'string',
                            },
                            count: {
                                type: 'number',
                                format: 'integer',
                            },
                        },
                    },
                },
            },
        },
        domains: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'url',
            },
        },
        dateOrganizationPrefsLastUpdated: {
            type: 'string',
            format: 'date',
        },
        idp: {
            properties: {
                requestSigned: {
                    type: 'boolean',
                },
                certificate: {
                    type: 'string',
                    isNullable: true,
                },
                loginUrl: {
                    type: 'string',
                    isNullable: true,
                    format: 'url',
                },
            },
        },
    },
} as const;
