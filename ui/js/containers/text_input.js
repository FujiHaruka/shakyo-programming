import React from 'react'
import {connect} from 'react-redux'
import { nextGameProcess, gameFinish, displayGameFinishWindow } from '../actions'

let TextInput = React.createClass({
  propTypes: {
    playing: React.PropTypes.bool,
    nextKey: React.PropTypes.string,
    dispatch: React.PropTypes.func,
    keyArray: React.PropTypes.array,
    countPressed: React.PropTypes.number
  },
  render () {
    const s = this
    return (
      <div>
        <textarea
          className='text-input'
          cols='1'
          rows='1'
          ref={(input) => { s._input = input }}
          onInput={s.onInput}
        ></textarea>
      </div>
    )
  },

  componentWillUpdate (nextProps) {
    let gameStarted = this.props.playing === false && nextProps.playing === true
    if (gameStarted) {
      this.onGameStart()
    }
  },

  onInput (e) {
    const s = this
    let char = e.currentTarget.value
    e.currentTarget.value = ''
    // TODO ここでゲームの終了処理をしているのはキモい
    let {nextKey, keyArray, dispatch, countPressed} = this.props
    if (char === nextKey) {
      dispatch(nextGameProcess({ keyArray }))
      if (countPressed + 1 === keyArray.length) {
        setTimeout(() => {
          document.removeEventListener('click', s._focus)
          s._input.blur()
          dispatch(displayGameFinishWindow())
          dispatch(gameFinish())
        }, 100)
      }
    }
  },

  onGameStart () {
    const s = this
    s._focus()
    document.addEventListener('click', s._focus)
  },

  _focus () {
    this._input.focus()
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    nextKey: state.gameProcess.nextKey,
    keyArray: state.code.keyArray,
    countPressed: state.gameProcess.countPressed,
    playing: state.gameProcess.playing
  }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

TextInput = connect(mapStateToProps, mapDispatchToProps)(TextInput)

export default TextInput
