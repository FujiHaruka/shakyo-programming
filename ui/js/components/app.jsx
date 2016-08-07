/**
 * Application component.
 */
import React from 'react'
import AppStyle from '../containers/app_style'
import Header from './header'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <AppStyle/>
        <Header/>
      </div>
    )
  }
})

export default App
