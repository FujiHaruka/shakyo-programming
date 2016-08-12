/**
 * Top level reducer.
 * The state shape is below.
 * {
 *   themeColor: '#5ff',
 *   code: {
 *     text: 'var hoge = ...',
 *     language: 'javascript',
 *     count: 180,
 *     keyArray: ['v', 'a', 'r', ...]
 *   },
 *   gamePrepared: true,
 *   gameProcess: {
 *     playing: true,
 *     nextKey: 'h',
 *     countPressed: 12
 *   },
 *   gameFinishWindow: false,
 *   gameResult: {
 *     time: 12.3
 *   }
 * }
 */

import { combineReducers } from 'redux'
import themeColor from './theme_color'
import code from './code'
import gamePrepared from './game_prepared'
import gameProcess from './game_process'
import gameFinishWindow from './game_finish_window'
import gameResult from './game_result'

const Reducer = combineReducers({
  themeColor,
  code,
  gamePrepared,
  gameProcess,
  gameFinishWindow,
  gameResult
})

export default Reducer
