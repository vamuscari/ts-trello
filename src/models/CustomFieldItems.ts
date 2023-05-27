/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TrelloID } from './TrelloID';

export type CustomFieldItems = {
    id?: TrelloID;
    value?: {
        checked?: string;
    };
    idCustomField?: TrelloID;
    idModel?: TrelloID;
    modelType?: 'card' | 'board' | 'member';
};

