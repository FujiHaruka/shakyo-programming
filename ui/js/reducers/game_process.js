/**
* Reducer of gameProcess
* 他の code reducer の値を参照しているので、 action に keyArray を渡す。
*/
const assert = require('assert')
let defaultState = {
  playing: false,
  nextKey: null,
  countPressed: null
}
const gameProcess = (state = defaultState, action) => {
  switch (action.type) {
    case 'GAME_START':
      return {
        playing: true,
        nextKey: action.keyArray[0],
        countPressed: 0
      }
    case 'NEXT_KEY':
      let nextCount = state.countPressed + 1
      return {
        playing: true,
        nextKey: action.keyArray[nextCount] || '',
        countPressed: nextCount
      }
    case 'GAME_FINISH':
      return defaultState
    default:
      return defaultState
  }
}

export default gameProcess
