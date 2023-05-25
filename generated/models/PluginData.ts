/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TrelloID } from './TrelloID';

export type PluginData = {
    id?: TrelloID;
    idPlugin?: TrelloID;
    scope?: 'member' | 'board' | 'organization' | 'card';
    idModel?: TrelloID;
    value?: string;
    access?: 'private' | 'shared';
};

