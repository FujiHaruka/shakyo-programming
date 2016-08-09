/**
 * Reducer of gameStarted
 */
const gameStarted = (state = false, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return action.gameStarted
    default:
      return state
  }
}

export default gameStarted
