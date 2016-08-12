import React from 'react'
import classnames from 'classnames'
import ImportUrlForm from '../containers/import_url_form'

const ImportSection = React.createClass({
  render () {
    return (
      <section className='import-section'>
        <h2 className={classnames('import-section-title', 'app-theme-dark-color')}>外部サイトからインポート</h2>
        <ImportUrlForm />
      </section>
    )
  }
})

export default ImportSection
