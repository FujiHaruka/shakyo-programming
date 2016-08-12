import React from 'react'
import {connect} from 'react-redux'
import {hideGameFinishWindow} from '../actions'
import classnames from 'classnames'

let FinishWindow = React.createClass({
  propTypes: {
    display: React.PropTypes.bool,
    close: React.PropTypes.func
  },

  render () {
    const s = this
    let {props} = s
    let {display, close} = props
    return (
      <div className={classnames('finish-window-background', display ? '' : 'hidden')}>
        <div className='finish-window'>
          <p>Clear !</p>
          <span className='button app-theme-color' onClick={close}>閉じる</span>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    display: state.gameFinishWindow
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    close () {
      dispatch(hideGameFinishWindow())
    }
  }
}

FinishWindow = connect(mapStateToProps, mapDispatchToProps)(FinishWindow)

export default FinishWindow
