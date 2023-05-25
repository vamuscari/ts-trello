/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CardAging } from './CardAging';
import type { ImageDescriptor } from './ImageDescriptor';
import type { TrelloID } from './TrelloID';

export type Prefs = {
    permissionLevel?: 'org' | 'board';
    hideVotes?: boolean;
    voting?: 'disabled' | 'enabled';
    comments?: string;
    invitations?: 'admins' | 'members';
    selfJoin?: boolean;
    cardCovers?: boolean;
    isTemplate?: boolean;
    cardAging?: CardAging;
    calendarFeedEnabled?: boolean;
    background?: TrelloID;
    backgroundImage?: string;
    backgroundImageScaled?: Array<ImageDescriptor>;
    backgroundTile?: boolean;
    backgroundBrightness?: string;
    backgroundBottomColor?: string;
    backgroundTopColor?: string;
    canBePublic?: boolean;
    canBeEnterprise?: boolean;
    canBeOrg?: boolean;
    canBePrivate?: boolean;
    canInvite?: boolean;
};

