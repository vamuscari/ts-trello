/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions';
import {APIKey} from "../models/APIKey";
import {APIToken} from "../models/APIToken";

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type Config = {
    BASE: string;
    HEADERS?: Headers | Resolver<Headers>;
    KEY?: APIKey
    TOKEN?: APIToken
    ENCODE_PATH?: (path: string) => string;
};

export const OpenAPI: Config = {
    BASE: 'https://api.trello.com/1',
    KEY: undefined,
    TOKEN: undefined,
    HEADERS: undefined,
    ENCODE_PATH: undefined,
};
