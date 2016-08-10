/**
 * Reducer of gameStarted
 */
const gameStarted = (state = false, action) => {
  switch (action.type) {
    case 'GAME_START':
      return true
    case 'GAME_ABORT':
    case 'GAME_END':
      return false
    default:
      return state
  }
}

export default gameStarted
