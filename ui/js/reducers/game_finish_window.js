/**
 * Reducer of gameFinished
 */
const gameFinished = (state = false, action) => {
  switch (action.type) {
    case 'DISPLAY_GAME_FINISH_WINDOW':
      return true
    case 'HIDE_GAME_FINISH_WINDOW':
      return false
    default:
      return state
  }
}

export default gameFinished
