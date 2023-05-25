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
     * @param locale The locale to return emoji descriptions and names in. Defaults to the logged in member's locale.
     * @param spritesheets `true` to return spritesheet URLs in the response
     * @returns Emoji Success
     * @throws ApiError
     */
    public emoji(
        locale?: string,
        spritesheets: boolean = false,
    ): CancelablePromise<Emoji> {
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
