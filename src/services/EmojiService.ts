/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Emoji } from '../models/Emoji';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EmojiService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List available Emoji
     * List available Emoji
     * @returns Emoji Success
     * @throws ApiError
     */
    public emoji({
        locale,
        spritesheets = false,
    }: {
        /**
         * The locale to return emoji descriptions and names in. Defaults to the logged in member's locale.
         */
        locale?: string,
        /**
         * `true` to return spritesheet URLs in the response
         */
        spritesheets?: boolean,
    }): CancelablePromise<Emoji> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/emoji',
            query: {
                'locale': locale,
                'spritesheets': spritesheets,
            },
        });
    }

}
