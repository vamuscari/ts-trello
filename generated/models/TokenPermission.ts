/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TrelloID } from './TrelloID';

export type TokenPermission = {
    idModel?: (TrelloID | '*');
    modelType?: 'board' | 'member' | 'organization' | 'enterprise';
    read?: boolean;
    write?: boolean;
};

