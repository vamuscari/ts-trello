/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $posStringOrNumber = {
    type: 'one-of',
    contains: [{
        type: 'Enum',
    }, {
        type: 'number',
        format: 'float',
    }],
} as const;
