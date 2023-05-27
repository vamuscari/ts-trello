/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MemberPrefs = {
    properties: {
        timezoneInfo: {
            properties: {
                offsetCurrent: {
                    type: 'number',
                },
                timezoneCurrent: {
                    type: 'string',
                },
                offsetNext: {
                    type: 'number',
                },
                dateNext: {
                    type: 'string',
                    format: 'date',
                },
                timezoneNext: {
                    type: 'string',
                },
            },
        },
        privacy: {
            properties: {
                fullName: {
                    type: 'Enum',
                },
                avatar: {
                    type: 'Enum',
                },
            },
        },
        sendSummaries: {
            type: 'boolean',
        },
        minutesBetweenSummaries: {
            type: 'number',
        },
        minutesBeforeDeadlineToNotify: {
            type: 'number',
        },
        colorBlind: {
            type: 'boolean',
        },
        locale: {
            type: 'string',
        },
        timezone: {
            type: 'string',
        },
        twoFactor: {
            properties: {
                enabled: {
                    type: 'boolean',
                },
                needsNewBackups: {
                    type: 'boolean',
                },
            },
        },
    },
} as const;
