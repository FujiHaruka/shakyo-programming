/**
 * Reducer of gameFinished
 */
const gameFinished = (state = false, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return action.gameFinished
    default:
      return state
  }
}

export default gameFinished
