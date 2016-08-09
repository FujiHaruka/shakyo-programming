const hljs = require('highlight.js')
const HTML = require('html-parse-stringify2')

// TODO escape をどうするか
/**
 * @param {object} code
 * @return {string} htmlString
 */
function giveTags (code) {
  if (!code.language || !code.text) {
    return ''
  }
  let highlighten = hljs.highlight(code.language, code.text, true, false).value

  // html-parse-stringify2 ではスペースが無視されるので
  let fHighlighten = highlighten.replace(/(span>)([ ]+)(<span)/g, (m, p1, p2, p3) => {
    let spaces = p2.split('').map(() => '{#space#}').join('')
    return p1 + spaces + p3
  })

  // Use html-parse-stringify2
  let ast = HTML.parse(fHighlighten)

  // 再帰的に書き換えるやつ
  let spanCounter = 1
  let rewrite = (content) => {
    let split = content.split('')
    let returnFlag = false // 改行後のスペースにタグ付与しないためのフラグ
    let tag = (char) => `<span id="code-char-${spanCounter++}">${char}</span>`
    let rewritten = split.map((char) => {
      switch (char) {
        case '\n':
          // とりあえず改行文字自体はタグ付与しない
          returnFlag = true
          return char
        case ' ':
          return returnFlag ? char : tag(char)
        default:
          returnFlag = false
          return tag(char)
      }
    })
    return rewritten.join('')
  }

  function dfsAddSpan (ast) {
    ast.forEach(node => {
      if (node.type === 'text') {
        let {content} = node
        // ここで {#space#}を書き換える
        node.content = rewrite(content.replace(/{#space#}/g, ' '))
      } else {
        dfsAddSpan(node.children)
      }
    })
  }

  dfsAddSpan(ast)
  let htmlString = HTML.stringify(ast)
  return htmlString
}

module.exports = giveTags
