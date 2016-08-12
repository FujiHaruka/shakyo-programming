/**
 * Action of setGameProcess
 */
import assert from 'assert'

const gameStart = ({ keyArray }) => {
  assert.ok(keyArray)
  return {
    type: 'GAME_START',
    keyArray
  }
}

const nextGameProcess = ({ keyArray }) => {
  assert.ok(keyArray)
  return {
    type: 'NEXT_KEY',
    keyArray
  }
}

const gameFinish = () => {
  return {
    type: 'GAME_FINISH'
  }
}

module.exports = {
  gameStart,
  nextGameProcess,
  gameFinish
}
