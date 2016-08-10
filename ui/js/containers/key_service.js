/**
 * Style of the whole application.
 */
import React from 'react'
import {connect} from 'react-redux'
import Keycoder from 'keycoder'

/**
 * キーイベントを管理するだけのクラス
 */
let KeyService = React.createClass({
  render () {
    return null
  }
})

// とりあえず playing だけを用意するが、
// ゲーム開始は enter キーで行いたいかも？
// そうするともうひとつ event ふえるよね
const mapStateToProps = (state, { playing }) => {
  if (state.gameStarted) {
    return {
      playing: state.gameStarted,
      nextKey: state.gameProcess.nextKey
    }
  } else {
    return {
      playing: false
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

const mergeProps = ({ playing }, { dispatch }) => {
  console.log('hoge')
  console.log(playing)
  console.log(window.onkeydown)
  if (playing && !window.onkeydown) {
    window.onkeydown = (e) => {
      // TODO US キーボードじゃん...
      console.log(Keycoder.toCharacter(e.keyCode, e.shiftKey))
    }
  }
  return {} // 仕様上必要
}

KeyService = connect(mapStateToProps, mapDispatchToProps, mergeProps)(KeyService)

export default KeyService
