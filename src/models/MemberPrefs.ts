/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MemberPrefs = {
    timezoneInfo?: {
        offsetCurrent?: number;
        timezoneCurrent?: string;
        offsetNext?: number;
        dateNext?: string;
        timezoneNext?: string;
    };
    privacy?: {
        fullName?: 'public' | 'private' | 'collaborator';
        avatar?: 'public' | 'private' | 'collaborator';
    };
    sendSummaries?: boolean;
    minutesBetweenSummaries?: number;
    minutesBeforeDeadlineToNotify?: number;
    colorBlind?: boolean;
    locale?: string;
    timezone?: string;
    twoFactor?: {
        enabled?: boolean;
        needsNewBackups?: boolean;
    };
};

