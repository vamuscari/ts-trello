/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { CancelablePromise } from './CancelablePromise';
import type { TrelloConfig } from './OpenAPI';

export abstract class BaseHttpRequest {

    constructor(public readonly config: TrelloConfig) {}

    public abstract request<T>(options: ApiRequestOptions): CancelablePromise<T>;
}
