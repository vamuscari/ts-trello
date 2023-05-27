import { describe, expect, test} from '@jest/globals';
import { TsTrello } from "../src";

console.log(process.env.TRELLO_KEY)

const tsTrello = new TsTrello({
    KEY: process.env.TRELLO_KEY,
    TOKEN: process.env.TRELLO_TOKEN
})

describe('Request', () => {
    test('trello', async () => {
        let res = await tsTrello.members.getMembersId({
            id: "me"
        })
        expect(res).toEqual(200);
    });
})