import React, { Fragment } from 'react'

import Jaril from 'react-string-manipulator'
// import 'react-string-manipulator/dist/index.css'

const App = () => {
  return (
    <Fragment>
      <Jaril
        text='Hello My Name is Manan  Solanki'
        findAndReplace={{
          find: 'Manan',
          replace: 'Yash'
        }}
      />

      <Jaril
        text='Hello My Name is Manan  Solanki'
        tagName={{
          tag: 'b',
          string: 'Manan'
        }}
      />
    </Fragment>
  )
}

export default App
