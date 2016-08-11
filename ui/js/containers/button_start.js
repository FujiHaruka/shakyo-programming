import React from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import {gameStart} from '../actions'

let ButtonStart = React.createClass({
  getDefaultProps () {
    return {
      gameStarted: false
    }
  },
  render () {
    let disabled = this.props.gameStarted
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
    let { gamePrepared, dispatch } = this.props
    if (gamePrepared) {
      dispatch(gameStart())
    }
  }
})

const mapStateToProps = (state) => {
  return {
    gamePrepared: state.gamePrepared,
    gameStarted: state.gameStarted
  }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

ButtonStart = connect(mapStateToProps, mapDispatchToProps)(ButtonStart)

export default ButtonStart
