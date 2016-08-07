/**
 * Site Header
 */
import React from 'react'
import classnames from 'classnames'

const Header = React.createClass({
  render () {
    return (
      <div className={classnames('header', 'app-theme-background-color')}>
        <h1>写経プログラミング - Let's Shakyo!!</h1>
      </div>
    )
  }
})

export default Header
