import React from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import {gameStart} from '../actions'

let ButtonStart = React.createClass({
  getDefaultProps () {
    return {
      playing: false
    }
  },
  render () {
    let disabled = this.props.playing
    return (
      <span
        className={
          disabled ? 'button-disabled' : classnames(
            'button', 'app-theme-color', 'app-theme-color-border'
          )
        }
        onClick={this.onClick}>
        スタート
      </span>
    )
  },
  onClick () {
    let { gamePrepared, dispatch, keyArray } = this.props
    if (gamePrepared) {
      dispatch(gameStart({ keyArray }))
    }
  }
})

const mapStateToProps = (state) => {
  return {
    gamePrepared: state.gamePrepared,
    playing: state.gameProcess.playing,
    keyArray: state.code.keyArray
  }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

ButtonStart = connect(mapStateToProps, mapDispatchToProps)(ButtonStart)

export default ButtonStart
