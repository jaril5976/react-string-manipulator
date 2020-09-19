import React, { Fragment } from 'react'
import Jaril, { useManipulator } from 'react-string-manipulator'

const App = () => {
  const Text = 'Hey My name is Raj h jariwala Raj'
  const Obj = {
    text: Text,
    search: 'Raj',
    tag: 'p'
  }
  console.log(useManipulator(Obj))
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
