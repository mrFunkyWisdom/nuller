# nuller

Nuller is a small and simple library for providing default values for null or undefined object property access

<hr />

[![Build Status](https://travis-ci.org/mrFunkyWisdom/nuller.svg?branch=master)](https://travis-ci.org/mrFunkyWisdom/nuller)
[![codecov](https://codecov.io/gh/mrFunkyWisdom/nuller/branch/master/graph/badge.svg)](https://codecov.io/gh/mrFunkyWisdom/nuller)
[![npm version](https://badge.fury.io/js/nuller.svg)](https://badge.fury.io/js/nuller)
[![Maintainability](https://api.codeclimate.com/v1/badges/b70d1e714c9e0c2fb5cb/maintainability)](https://codeclimate.com/github/mrFunkyWisdom/nuller/maintainability)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)


## Usage

nuller function can take parameters partially, first by providing the fallback object, and later to provide a real object.

```javascript
import nuller from 'nuller';

const withFallback = nuller({
  name: 'John',
  lastName: 'Galt',
  location: 'unknown'
});

const originalObject = {
  name: 'John',
  location: null
};

const object = withFallback(originalObject);

console.log(
  `User ${object.name} ${object.lastName} lives in ${object.location} location`
);
//  User John Galt lives in unknown location
```

```javascript
import nuller from 'nuller';

const fallbackObject = {
  name: 'John',
  lastName: 'Galt',
  location: 'unknown'
};

const originalObject = {
  name: 'John',
  location: null
};

const object = nuller(originalObject, fallbackObject);

console.log(
  `User ${object.name} ${object.lastName} lives in ${object.location} location`
);
//  User John Galt lives in unknown location
```

## Installation

This module is distributed via `npm` and should be installed as your project's "dependencies"

```
npm install --save nuller
```

## License

MIT © [Ensar Bavrk](https://github.com/mrFunkyWisdom)
