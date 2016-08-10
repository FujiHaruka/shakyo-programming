/**
 * Reducer of gameFinished
 */
const gameFinished = (state = false, action) => {
  switch (action.type) {
    case 'GAME_FINISH':
      return action.gameFinished
    default:
      return state
  }
}

export default gameFinished
