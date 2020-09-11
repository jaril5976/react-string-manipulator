import React, { Fragment } from 'react'
import Jaril from 'react-string-manipulator'

const App = () => {
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

export default App
