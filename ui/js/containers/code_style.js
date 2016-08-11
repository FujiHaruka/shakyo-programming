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

let currentPosStyle = (number) => {
  return `
#code-char-${number} {
  border-bottom: 3px solid red;
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
      charStyles: (new Array(MAX_COUNT)).fill(0).map((v, i) => shadowCharStyle(i + 1))
    }
  },

  render () {
    const s = this
    let {charStyles, countTotal, countPressed} = s.props
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
          {currentPosStyle(countPressed + 1)}
        </style>
      </div>
    )
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    countTotal: state.code.count || 0,
    countPressed: state.gameProcess.countPressed || 0
  }
}

CodeStyle = connect(mapStateToProps)(CodeStyle)

export default CodeStyle
