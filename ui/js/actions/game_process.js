/**
 * Action of setGameProcess
 */
import assert from 'assert'

const initGameProcess = ({ keyArray }) => {
  assert.ok(keyArray)
  return {
    type: 'INIT_GAME_PROCESS',
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

module.exports = {
  initGameProcess,
  nextGameProcess
}
