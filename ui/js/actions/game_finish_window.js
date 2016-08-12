const displayGameFinishWindow = () => {
  return { type: 'DISPLAY_GAME_FINISH_WINDOW' }
}

const hideGameFinishWindow = () => {
  return { type: 'HIDE_GAME_FINISH_WINDOW' }
}

module.exports = {
  displayGameFinishWindow,
  hideGameFinishWindow
}
