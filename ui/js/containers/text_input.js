import React from 'react'
import {connect} from 'react-redux'
import { nextGameProcess, gameFinish } from '../actions'

let TextInput = React.createClass({
  // debug 用の state
  getInitialState () {
    return {
      text: ''
    }
  },
  render () {
    const s = this
    return (
      <div>
        <textarea
          className='text-input'
          cols='2'
          rows='1'
          ref={(input) => {
            if (input !== null) {
              input.focus()
              s._input = input
            }
          }}
          onInput={this.onInput}
        ></textarea>
        {this.state.text}
      </div>
    )
  },

  onInput (e) {
    const s = this
    let char = e.currentTarget.value
    e.currentTarget.value = ''
    // 判定
    let {nextKey, keyArray, dispatch, countPressed} = this.props
    if (char === nextKey) {
      dispatch(nextGameProcess({ keyArray }))
      if (countPressed + 1 === keyArray.length) {
        setTimeout(() => {
          window.alert('Finish')
          s._input.blur()
          dispatch(gameFinish())
        }, 100)
      }
    }
  }
})

const mapStateToProps = (state) => {
  return {
    nextKey: state.gameProcess.nextKey,
    keyArray: state.code.keyArray,
    countPressed: state.gameProcess.countPressed
  }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

TextInput = connect(mapStateToProps, mapDispatchToProps)(TextInput)

export default TextInput
