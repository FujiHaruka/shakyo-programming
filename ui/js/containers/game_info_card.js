import React from 'react'
import {connect} from 'react-redux'
import {setGameResult} from '../actions'

const Timer = connect(
  (state) => ({playing: state.gameProcess.playing}),
  (dispatch) => ({ dispatch })
)(React.createClass({
  propTypes: {
    playing: React.PropTypes.bool
  },

  getInitialState () {
    return { time: 0 }
  },

  formatTime (time) {
    let str = String(time)
    let formated = str.slice(0, str.indexOf('.') + 2)
    return formated
  },

  render () {
    return (
      <span>
        {this.formatTime(this.state.time)}
      </span>
    )
  },

  componentWillUpdate (nextProps) {
    let gameStarted = this.props.playing === false && nextProps.playing === true
    if (gameStarted) {
      this.onGameStart()
    }
    let gameFinished = this.props.playing === true && nextProps.playing === false
    if (gameFinished) {
      this.onGameFinished()
    }
  },

  onGameStart () {
    const s = this
    let timer = setInterval(() => {
      s.setState({
        time: s.state.time + 0.1
      })
    }, 100)
    s._timer = timer
    s.setState({
      time: 0
    })
  },

  onGameFinished () {
    const s = this
    let {dispatch} = s.props
    clearInterval(this._timer)
    dispatch(setGameResult({ time: s.formatTime(s.state.time) }))
  }
}))

const Counter = connect(
  (state) => ({
    playing: state.gameProcess.playing,
    countTotal: state.code.count || 0,
    countPressed: state.gameProcess.countPressed || 0
  }),
  (dispatch) => ({ dispatch })
)(React.createClass({
  getDefaultProps () {
    return {
      countTotal: 0,
      countPressed: 0
    }
  },
  render () {
    let {countTotal, countPressed} = this.props
    return (
      <span>
        {countPressed}/{countTotal}
      </span>
    )
  }
}))

const GameInfoCard = React.createClass({
  render () {
    return (
      <div className='game-info-card'>
        <div className='title app-theme-dark-color'>写経ザ・プログラム</div>
        <table>
          <tbody>
            <tr>
              <td>
                Time:
              </td>
              <td className='right'>
                <Timer />
              </td>
            </tr>
            <tr>
              <td>
                Count:
              </td>
              <td className='right'>
                <Counter />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
})

export default GameInfoCard
