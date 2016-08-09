/**
 * Application component.
 */
import React from 'react'
import AppStyle from '../containers/app_style'
import CodeStyle from '../containers/code_style'
import CodeSection from '../containers/code_section'
import Header from './header'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <AppStyle/>
        <CodeStyle />
        <Header/>
        <CodeSection/>
      </div>
    )
  }
})

export default App
