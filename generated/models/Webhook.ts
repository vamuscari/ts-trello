/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TrelloID } from './TrelloID';

export type Webhook = {
    id?: TrelloID;
    description?: string;
    idModel?: TrelloID;
    callbackURL?: string;
    active?: boolean;
    consecutiveFailures?: number;
    firstConsecutiveFailDate?: string | null;
};

