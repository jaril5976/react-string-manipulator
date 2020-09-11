# react-string-manipulator

[![NPM](https://img.shields.io/npm/v/react-string-manipulator.svg)](https://www.npmjs.com/package/react-string-manipulator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-string-manipulator
```

## Usage

```jsx
import React, { Component, Fragment } from 'react'

import Jaril from 'react-string-manipulator'

class Example extends Component {
  render() {
    return (
      <Fragment>
        <Jaril
          text='Hello World, How are me today?'
          findAndReplace={{
            findText: 'me',
            replaceText: 'you'
          }}
        />
        <Jaril
          text='Hello World, How are you today?'
          tagName={{
            tag: 'b',
            string: 'World'
          }}
        />
      </Fragment>
    )
  }
}
```

## License

MIT © [jaril5976](https://github.com/jaril5976)
