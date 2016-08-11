/**
 * Style of the whole application.
 */
import React from 'react'
import {connect} from 'react-redux'
import Color from 'color'

let AppStyle = React.createClass({
  propTypes: {
    /** Theme color of the site */
    color: React.PropTypes.string
  },

  render () {
    const s = this
    let { props } = s
    let { color } = props
    let darkColor = Color(color).darken(0.3).hslString()
    let style = `
    .app-theme-color {
      color: ${color};
    }
    .app-theme-dark-color {
      color: ${darkColor};
    }
    .app-theme-background-color {
      background-color: ${color};
    }
    .app-theme-color-border {
      border-color: ${color};
    }
    .app-theme-dark-color-border {
      border-color: ${darkColor}
    }
`
    return (
      <div className='app_style'>
        <style type='text/css'>
          {style}
        </style>
      </div>
    )
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    color: state.themeColor
  }
}

AppStyle = connect(mapStateToProps)(AppStyle)

export default AppStyle
