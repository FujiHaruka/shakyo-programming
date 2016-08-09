/**
 * Top level reducer.
 * The state shape is below.
 * {
 *   themeColor: '#5ff',
 *   code: {
 *     text: 'var hoge = ...',
 *     language: 'javascript',
 *     count: 180
 *   },
 *   gamePrepared: true,
 *   gameStarted: true,
 *   gameFinished: false,
 *   gameProcess: {
 *     nextKey: 'h',
 *     countPressed: 12
 *   }
 * }
 */

import { combineReducers } from 'redux'
import themeColor from './theme_color'
import code from './code'
import gamePrepared from './game_prepared'
import gameStarted from './game_process'
import gameFinished from './game_finished'
import gameProcess from './game_process'

const Reducer = combineReducers({
  themeColor,
  code,
  gamePrepared,
  gameStarted,
  gameFinished,
  gameProcess
})

export default Reducer
