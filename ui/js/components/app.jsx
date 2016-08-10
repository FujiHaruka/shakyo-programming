/**
 * Application component.
 */
import React from 'react'
import AppStyle from '../containers/app_style'
import CodeStyle from '../containers/code_style'
import CodeSection from '../containers/code_section'
import Header from './header'
import KeyService from '../containers/key_service'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <AppStyle/>
        <CodeStyle />
        <Header/>
        <CodeSection/>
        <KeyService/>
      </div>
    )
  }
})

export default App
