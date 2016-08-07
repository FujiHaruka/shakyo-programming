/**
 * Top level reducer.
 * The state shape is below.
 * {
 *   themeColor: '#5ff',
 *   code: {
 *     text: 'var hoge = ...',
 *     language: 'javascript'
 *   }
 * }
 */

import { combineReducers } from 'redux'
import themeColor from './theme_color'
import code from './code'

const Reducer = combineReducers({
  themeColor,
  code
})

export default Reducer
