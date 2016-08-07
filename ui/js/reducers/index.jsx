/**
 * Top level reducer.
 * The state shape is below.
 * {
 *   themeColor: '#5ff',
 * }
 */

import { combineReducers } from 'redux'
import themeColor from './theme_color'

const Reducer = combineReducers({
  themeColor
})

export default Reducer
