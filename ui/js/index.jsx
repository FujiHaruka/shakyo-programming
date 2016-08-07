import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './reducers'
import {themeColor} from './actions'

const rootEl = document.getElementById('site')

let store = createStore(Reducer)
let color = '#824'

store.dispatch(themeColor({ color: '#824' }))

function render () {
  ReactDOM.render(
    <Provider store={ store }>
      <App color={ color }/>
    </Provider>,
    rootEl
  )
}

document.addEventListener('DOMContentLoaded', render)
