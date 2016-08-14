import React from 'react'
import classnames from 'classnames'
import ImportUrlForm from '../containers/import_url_form'

const ImportSection = React.createClass({
  render () {
    return (
      <section className='section'>
        <h2 className={classnames('section-title', 'app-theme-dark-color')}>■ 外部サイトからインポート</h2>
        <div className='description-section-body'>
          <ul>
            <li>
              外部サイトからコードを読み込んで写経できます。
            </li>
            <li>
              Github などでコードを探して写経しましょう。
            </li>
            <li>
              Raw なコードの URL を入力してください。<br/>
              たとえば、 "https://raw.githubusercontent.com/FujiHaruka/shakyo-programming/master/ui/js/sample_codes/hello_world.js" みたいに。
            </li>
            <li>
              日本語入力には対応していません。あしからず。
            </li>
          </ul>
        </div>
        <ImportUrlForm />
      </section>
    )
  }
})

export default ImportSection
