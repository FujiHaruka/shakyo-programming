/**
 * Style of the Code
 */
import React from 'react'
import {connect} from 'react-redux'

// TODO ここで最大文字数をカウントするのは不自然
const MAX_COUNT = 500

let shadowCharStyle = (number) => {
  return `
#code-char-${number} {
  color: #999;
}
`
}

let currentId = (number) => {
  return `code-char-${number}`
}

let currentPosStyle = (curId) => {
  return `
#${curId} {
  border-bottom: 3px solid red;
}
`
}

let textInputStyle = (y) => {
  return `
.text-input {
  top: ${y}px;
}
`
}

let CodeStyle = React.createClass({
  propTypes: {
    countTotal: React.PropTypes.number,
    countPressed: React.PropTypes.number
  },

  getDefaultProps () {
    return {
      charStyles: (new Array(MAX_COUNT)).fill(0).map((v, i) => shadowCharStyle(i + 1)),
      playing: false
    }
  },

  render () {
    const s = this
    let {charStyles, countTotal, countPressed, playing} = s.props
    let curId = currentId(countPressed + 1)
    // 高さ
    let curElement = document.getElementById(curId)
    if (!curElement) {
      console.log('id not found')
      return (<div></div>)
    }
    let curElementY = curElement.getBoundingClientRect().top + window.pageYOffset
    if (playing) {
      // TODO パフォーマンス改善
      return (
        <div className='code-style'>
          {charStyles.slice(countPressed, countTotal).map((style) => {
            return (
              <style type='text/css' key={style}>
                {style}
              </style>
            )
          })}
          <style type='text/css'>
            {currentPosStyle(curId)}
          </style>
          <style type='text/css'>
            {textInputStyle(curElementY)}
          </style>
        </div>
      )
    } else {
      return (<div className='code-style'></div>)
    }
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    countTotal: state.code.count || 0,
    countPressed: state.gameProcess.countPressed || 0,
    playing: state.gameProcess.playing || false
  }
}

CodeStyle = connect(mapStateToProps)(CodeStyle)

export default CodeStyle
