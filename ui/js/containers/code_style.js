/**
 * Style of the Code
 * パフォーマンスのため event を使っている。
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

let charStyleId = (number) => `code-char-style-${number}`

const CodeCharStyle = React.createClass({
  propTypes: {
    idNumber: React.PropTypes.number
  },
  getInitialState () {
    return {
      highlightOff: true
    }
  },
  render () {
    const s = this
    let {highlightOff} = s.state
    let {idNumber} = s.props
    if (highlightOff) {
      return (
        <style type='text/css' id={charStyleId(idNumber)}>
          {shadowCharStyle(idNumber)}
        </style>
      )
    } else {
      return (
        <style type='text/css' id={charStyleId(idNumber)}></style>
      )
    }
  },
  handleHighlightOn () {
    this.setState({ highlightOff: false })
  },
  componentDidMount () {
    let {idNumber} = this.props
    document.getElementById(charStyleId(idNumber)).addEventListener('highlightOn', this.handleHighlightOn)
  },
  componentWillUnmount () {
    let {idNumber} = this.props
    document.getElementById(charStyleId(idNumber)).removeEventListener('highlightOn', this.handleHighlightOn)
  }
})

const CurrentPosStyle = connect((state) => {
  return {
    countPressed: state.gameProcess.countPressed
  }
})(React.createClass({
  propTypes: {
    countPressed: React.PropTypes.number
  },
  render () {
    let {countPressed} = this.props
    let curId = currentId(countPressed + 1)
    let curElement = document.getElementById(curId)
    if (!curElement) { // ゲーム終了時
      return <style></style>
    }
    let curElementY = curElement.getBoundingClientRect().top + window.pageYOffset
    return (
      <style type='text/css'>
        {currentPosStyle(curId)}
        {textInputStyle(curElementY)}
      </style>
    )
  },
  shouldComponentUpdate (nextProps) {
    return nextProps.countPressed !== this.props.countPressed
  },
  // FIXME なぜかここで CodeCharStyle の更新を行っている
  componentDidUpdate () {
    let {countPressed} = this.props
    let id = charStyleId(countPressed)
    let codeCharStyle = document.getElementById(id)
    if (!codeCharStyle) {
      throw new Error(`Not found ${id}`)
    }
    let event = new window.Event('highlightOn')
    codeCharStyle.dispatchEvent(event)
  }
}))

let CodeStyle = React.createClass({
  propTypes: {
    countTotal: React.PropTypes.number,
    playing: React.PropTypes.bool,
    store: React.PropTypes.object
  },

  getDefaultProps () {
    return {
      playing: false
    }
  },

  render () {
    console.log('CodeStyle render')
    const s = this
    let {countTotal, playing} = s.props
    if (playing) {
      let idNumbers = (new Array(countTotal)).fill(1).map((v, i) => i + v)
      return (
        <div className='code-style'>
          {idNumbers.map((idNumber) =>
              <CodeCharStyle idNumber={idNumber} key={idNumber}/>
          )}
          <CurrentPosStyle />
        </div>
      )
    } else {
      return (<div className='code-style'></div>)
    }
  },

  shouldComponentUpdate (nextProps) {
    if (this.props.playing !== nextProps.playing ||
        this.props.countTotal !== nextProps.countTotal) {
      return true
    } else {
      return false
    }
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    countTotal: state.code.count || 0,
    playing: state.gameProcess.playing || false
  }
}

CodeStyle = connect(mapStateToProps)(CodeStyle)

export default CodeStyle
