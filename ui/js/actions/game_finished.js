/**
 * Action of setGameFinished
 */
const setGameFinished = (gameFinished) => {
  return {
    type: 'SET_STATE',
    gameFinished
  }
}

export default setGameFinished
