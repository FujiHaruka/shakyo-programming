import React from 'react'
import {connect} from 'react-redux'
import giveTags from '../util/give_tags'

let CodeSection = React.createClass({
  propTypes: {
    code: React.PropTypes.object
  },

  render () {
    const s = this
    let { props } = s
    let code = props.code || {}
    let html = {
      __html: giveTags(code)
    }
    return (
      <section className='code-section'>
        <div className='code-section-language'>
          {code.language}
        </div>
        <div className='code-section-body'>
          <pre>
            <code className={code.language} dangerouslySetInnerHTML={html}>
            </code>
          </pre>
        </div>
      </section>
    )
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    code: state.code
  }
}

CodeSection = connect(mapStateToProps)(CodeSection)

export default CodeSection
