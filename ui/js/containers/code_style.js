/**
 * Style of the Code
 */
import React from 'react'
import {connect} from 'react-redux'

let shadowCharStyle = (number) => {
  return `
#code-char-${number} {
color: #999;
}
`
}

let CodeStyle = React.createClass({
  propTypes: {},

  getDefaultProps () {
    return {
      charStyles: (new Array(50)).fill(0).map((v, i) => shadowCharStyle(i + 1))
    }
  },

  render () {
    const s = this
    let {charStyles} = s.props
    return (
      <style type='text/css'>
        {charStyles}
      </style>
    )
  }
})

const mapStateToProps = (state, ownProps) => {
  return {}
}

CodeStyle = connect(mapStateToProps)(CodeStyle)

export default CodeStyle
