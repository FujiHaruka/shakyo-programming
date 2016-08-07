import React from 'react'
import {connect} from 'react-redux'
import hljs from 'highlight.js'

let CodeSection = React.createClass({
  propTypes: {
    code: React.PropTypes.object
  },

  render () {
    const s = this
    let { props } = s
    let code = props.code || {}
    // highlight(name, value, ignore_illegals, continuation)
    // let highlighted = hljs.highlight(code.language, code.text, true, false)
    // console.log(highlighted)
    return (
      <section className='code-section'>
        <div className='code-section-language'>
          {code.language}
        </div>
        <div className='code-section-body'>
          <pre>
            <code className={code.language}>
              {code.text}
            </code>
          </pre>
        </div>
      </section>
    )
  },
  componentDidUpdate () {
    hljs.initHighlighting()
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    code: state.code
  }
}

CodeSection = connect(mapStateToProps)(CodeSection)

export default CodeSection
