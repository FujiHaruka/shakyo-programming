/**
 * Reducer of gameProcess
 */
const gameProcess = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return action.gameProcess
    default:
      return state
  }
}

export default gameProcess
