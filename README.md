# canUselocalStorage
[![GitHub issues](https://img.shields.io/github/issues/jiminycricket/easy-pad.svg)](https://github.com/jiminycricket/canUselocalStorage/issues)

## Install

npm:
```
npm install -save can-use-localstorage
```

yarn:
```
yarn add can-use-localstorage
```

## Usage
```
import canUselocalStorage from 'can-use-localstorage';
// const canUselocalStorage = require('can-use-localstorage');

const result = canUselocalStorage();

console.log(result);
// true || false

console.log(window.canUselocalStorage);
// true || false
```

## License
MIT
