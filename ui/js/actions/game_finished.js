/**
 * Action of setGameFinished
 */
const setGameFinished = (gameFinished) => {
  return {
    type: 'GAME_FINISH',
    gameFinished
  }
}

export default setGameFinished
