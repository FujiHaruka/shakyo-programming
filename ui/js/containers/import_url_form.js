import React from 'react'
import {connect} from 'react-redux'
import request from 'browser-request'
import {setCode} from '../actions'

let ImportUrlForm = React.createClass({
  propTypes: {},

  render () {
    const s = this
    return (
      <div className='import-url-form'>
        <span className='import-url-form-input-area'>
          URL: <input className='import-url-form-input' type='text' ref={(input) => s._input = input} />
        </span>
        <span className='button app-theme-color' onClick={s.import}>
          インポート
        </span>
      </div>
    )
  },

  import () {
    const s = this
    let ok = s.validate()
    if (ok) {
      // let url = s._input.value
      let url = 'https://raw.githubusercontent.com/fonnesbeck/scipy2014_tutorial/master/examples/bioassay.py'
      request(url, (err, res, body) => {
        if (err) {
          window.alert('データを取得できませんでした。')
          throw err
        }
        let getLanguage = (url) => {
          let split = url.split('.')
          return split[split.length - 1]
        }
        // text language
        let code = {
          text: body,
          language: getLanguage(url)
        }
        s.props.dispatch(setCode(code))
      })
    } else {
      window.alert('URL を入力してください。')
    }
  },

  validate () {
    const s = this
    let {value} = s._input
    return value.length > 0
  }
})

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({ dispatch })

ImportUrlForm = connect(mapStateToProps, mapDispatchToProps)(ImportUrlForm)

export default ImportUrlForm
