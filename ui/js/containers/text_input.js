import React from 'react'
import {connect} from 'react-redux'
import { nextGameProcess } from '../actions'

let TextInput = React.createClass({
  // debug 用の state
  getInitialState () {
    return {
      text: ''
    }
  },
  render () {
    return (
      <div>
        <textarea
          className='text-input'
          cols='2'
          rows='1'
          ref={(input) => { if (input !== null) input.focus() }}
          onInput={this.onInput}
        ></textarea>
        {this.state.text}
      </div>
    )
  },

  onInput (e) {
    let char = e.currentTarget.value
    e.currentTarget.value = ''
    // 判定
    let {nextKey, keyArray, dispatch} = this.props
    console.log('next: ', nextKey)
    if (char === nextKey) {
      dispatch(nextGameProcess({ keyArray }))
    }
  }
})

const mapStateToProps = (state) => {
  return {
    nextKey: state.gameProcess.nextKey,
    keyArray: state.code.keyArray
  }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

TextInput = connect(mapStateToProps, mapDispatchToProps)(TextInput)

export default TextInput
