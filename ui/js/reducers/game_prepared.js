/**
 * Reducer of gamePrepared
 */
const gamePrepared = (state = false, action) => {
  switch (action.type) {
    case 'GAME_PREPARE':
      return true
    default:
      return state
  }
}

export default gamePrepared
