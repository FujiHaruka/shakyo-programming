import React from 'react'
import classnames from 'classnames'

const DesctiptionSection = React.createClass({
  render () {
    return (
      <section className='section'>
        <h2 className={classnames('section-title', 'app-theme-dark-color')}>■ 遊び方</h2>
        <div className='description-section-body'>
          <ul>
            <li>
              写経するボタンで開始です。
            </li>
            <li>
              入力モードを「半角入力」にしてください。
            </li>
            <li>
              コメント、行頭の空白、改行は写経の文字に含まれません。
            </li>
            <li>
              たくさん写経して徳を積みましょう。
            </li>
          </ul>
        </div>
      </section>
    )
  }
})

export default DesctiptionSection
