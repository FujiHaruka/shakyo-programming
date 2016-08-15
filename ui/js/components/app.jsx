/**
 * Application component.
 */
import React from 'react'
import AppStyle from '../containers/app_style'
import CodeStyle from '../containers/code_style'
import CodeSection from '../containers/code_section'
import Controller from './controller'
import DesctiptionSection from './description.js'
import GameInfoCard from '../containers/game_info_card'
import Header from './header'
import HelloSection from '../containers/hello'
import ImportSection from './import_section'
import TextInput from '../containers/text_input'
import FinishWindow from '../containers/finish_window'

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
        <DesctiptionSection/>
        <ImportSection/>
        <HelloSection/>
        <GameInfoCard/>
        <FinishWindow/>
      </div>
    )
  }
})

export default App
