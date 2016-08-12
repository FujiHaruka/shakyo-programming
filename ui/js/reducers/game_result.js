let initial = {
  time: 0
}
const gamePrepared = (state = initial, action) => {
  switch (action.type) {
    case 'SET_GAME_RESULT':
      return { time: action.time }
    default:
      return state
  }
}

export default gamePrepared
