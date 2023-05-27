/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TrelloID } from './TrelloID';

export type CheckItem = {
    idChecklist?: TrelloID;
    state?: 'complete' | 'incomplete';
    id?: TrelloID;
    name?: string;
    nameData?: string | null;
    pos?: string;
};

