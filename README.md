# ts-trello

![Version](https://img.shields.io/badge/version-0.0.0-red.svg?cacheSeconds=2592000)
![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)

> A TypeScript SDK to interact with the Trello API

## Description

`ts-trello` is a TypeScript-based SDK designed to interface seamlessly with the Trello API. It provides a robust set of features to interact with Trello boards, cards, lists, and members.

## Features

- Simple, promise-based functions
- Full coverage of the Trello API
- Customizable, per-method API options
- In-built error handling and debugging

## Installation

Using npm:

```sh
npm install ts-trello
```

## Usage

Import the `TsTrello` from the `ts-trello` package:

```ts
import { TsTrello } from 'ts-trello';
```

Create an instance of `TrelloClient` with your API key and token:

```ts
const trello = new TsTrello({
  KEY: 'your-api-key',
  TOKEN: 'your-oauth-token',
});
```

You can then call methods on `client` to interact with the Trello API:

```ts
// Get user account
trello.members.getMembersId('me')
  .then(me => console.log(me))
  .catch(error => console.error(error));

// Create a new card
trello.cards.createCard(
    'list-id',
    'My new card',
    'This is a description for my new card.'
)
  .then(card => console.log(card))
  .catch(error => console.error(error));
```

## Documentation

For detailed information on how to use this package, please refer to the [documentation](https://github.com/vamuscari/ts-trello/wiki).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Contact

For any questions, you can reach out on GitHub. I would love to hear from you.

---

Created with :heart: by [Van Muscari](https://github.com/vamuscari)

