// TODO INIT と NEXT_KEY が必要
/**
 * Reducer of gameProcess
 * 他の code reducer の値を参照しているので、 action に keyArray を渡す。
 */
const gameProcess = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_GAME_PROCESS':
      return {
        nextKey: action.keyArray[0],
        countPressed: 0
      }
    case 'NEXT_KEY':
      let nextCount = state.countPressed + 1
      return {
        nextKey: action.keyArray[nextCount],
        countPressed: nextCount
      }
    default:
      return state
  }
}

export default gameProcess
