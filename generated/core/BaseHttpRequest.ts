/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { CancelablePromise } from './CancelablePromise';
import type { Config } from './OpenAPI';

export abstract class BaseHttpRequest {

    constructor(public readonly config: Config) {}

    public abstract request<T>(options: ApiRequestOptions): CancelablePromise<T>;
}
