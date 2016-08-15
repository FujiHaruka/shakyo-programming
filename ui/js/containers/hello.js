import React from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import {setCode} from '../actions'
import helloJs from '../sample_codes/hello.js.json'
import helloCpp from '../sample_codes/hello.cpp.json'
import helloJava from '../sample_codes/hello.java.json'
import helloRuby from '../sample_codes/hello.rb.json'
import helloPython from '../sample_codes/hello.py.json'
import helloGo from '../sample_codes/hello.go.json'

let HelloSection = React.createClass({
  render () {
    let hellos = [
      {
        codeObject: helloJs,
        name: 'JavaScript'
      },
      {
        codeObject: helloCpp,
        name: 'C++'
      },
      {
        codeObject: helloJava,
        name: 'Java'
      },
      {
        codeObject: helloGo,
        name: 'Go'
      },
      {
        codeObject: helloPython,
        name: 'Python'
      },
      {
        codeObject: helloRuby,
        name: 'Ruby'
      }
    ]
    return (
      <section className='section'>
        <h2 className={classnames('section-title', 'app-theme-dark-color')}>■ サンプル：いくつかの Hello World</h2>
        <div className='description-section-body'>
          <ul>
              {
                hellos.map(({codeObject, name}) => {
                  return (
                    <li style={{marginBottom: '30px'}}>
                      <span className='button app-theme-color' onClick={this.setCode(codeObject)}>
                        {name}
                      </span>
                    </li>
                  )
                })
              }
          </ul>
        </div>
      </section>
    )
  },

  setCode (codeObject) {
    const s = this
    return () => {
      window.scrollTo(0, 0)
      s.props.dispatch(setCode(codeObject))
    }
  }
})

let mapDispatchToProps = (dispatch) => ({ dispatch })

HelloSection = connect(null, mapDispatchToProps)(HelloSection)

export default HelloSection
