/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TokenPermission } from './TokenPermission';
import type { TrelloID } from './TrelloID';

export type Token = {
    id?: TrelloID;
    identifier?: string;
    idMember?: TrelloID;
    dateCreated?: string;
    dateExpires?: string | null;
    permissions?: Array<TokenPermission>;
};

