/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TrelloID } from './TrelloID';

export type CustomSticker = {
    id?: TrelloID;
    url?: string;
    scaled?: Array<{
        id?: TrelloID;
    }>;
};

