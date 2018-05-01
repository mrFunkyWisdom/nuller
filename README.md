# nuller

Nuller is a small and simple library for providing default values for null or undefined object property access
more-description : TO:DO

<hr />

[![Build Status](https://travis-ci.org/mrFunkyWisdom/nuller.svg?branch=master)](https://travis-ci.org/mrFunkyWisdom/nuller)
[![codecov](https://codecov.io/gh/mrFunkyWisdom/nuller/branch/master/graph/badge.svg)](https://codecov.io/gh/mrFunkyWisdom/nuller)

## Usage

Basic usage

```javascript
import nuller from 'nuller';

const user = {
  name: 'John',
  lastName: 'Galt'
};

const fallBackScheme = {
  name: 'Hank',
  age: 49
};

const userWithDefaults = nuller(user, fallBackScheme);

console.log(
  `The user ${userWithDefaults} is ${userWithDefaults.age} years old`
);
// The user John is 49 years old
```

TO:DO

## Install

TO:DO

## API

## License

MIT © [Ensar Bavrk](https://github.com/mrFunkyWisdom)
