/**
 * Site Header
 */
import React from 'react'
import classnames from 'classnames'

const Header = React.createClass({
  render () {
    return (
      <div className={classnames('header', 'app-theme-background-color')}>
        <img src='okyo.jpg'/>
        <h1>写経ザ・プログラム - Let's enjoy shakyoing program codes !</h1>
      </div>
    )
  }
})

export default Header
