import React from 'react'
import classnames from 'classnames'

const InfoSection = React.createClass({
  render () {
    return (
      <section className='section'>
        <h2 className={classnames('section-title', 'app-theme-dark-color')}>■ このサイトについて</h2>
        <div className='info-section-body'>
          <a href='https://github.com/FujiHaruka/shakyo-programming#readme'>Github</a> を見てください。
        </div>
      </section>
    )
  }
})

export default InfoSection
