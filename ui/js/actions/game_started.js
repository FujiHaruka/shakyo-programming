/**
 * Action of setGameStarted
 */
const setGameStarted = (gameStarted) => {
  return {
    type: 'SET_STATE',
    gameStarted
  }
}

export default setGameStarted
