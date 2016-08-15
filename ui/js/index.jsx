import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import Reducer from './reducers'
import {setThemeColor, setCode, gamePrepare} from './actions'

import sampleCode from './sample_codes/sample_6.json'

const rootEl = document.getElementById('site')
// const logger = createLogger()

let store = createStore(
  Reducer
  // applyMiddleware(logger)
)
let color = '#824'

store.dispatch(setThemeColor('#824'))
store.dispatch(setCode(sampleCode))
store.dispatch(gamePrepare())

function render () {
  ReactDOM.render(
    <Provider store={ store }>
      <App color={ color }/>
    </Provider>,
    rootEl
  )
}

document.addEventListener('DOMContentLoaded', render)
