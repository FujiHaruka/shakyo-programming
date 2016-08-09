/**
 * Reducer of gamePrepared
 */
const gamePrepared = (state = false, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return action.gamePrepared
    default:
      return state
  }
}

export default gamePrepared
