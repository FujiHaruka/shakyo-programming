/**
 * Application component.
 */
import React from 'react'
import AppStyle from '../containers/app_style'
import CodeStyle from '../containers/code_style'
import CodeSection from '../containers/code_section'
import Controller from './controller'
import GameInfoCard from '../containers/game_info_card'
import Header from './header'
import TextInput from '../containers/text_input'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <AppStyle/>
        <CodeStyle />
        <Header/>
        <CodeSection/>
        <TextInput/>
        <Controller/>
        <GameInfoCard/>
      </div>
    )
  }
})

export default App
