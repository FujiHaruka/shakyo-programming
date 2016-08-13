const hljs = require('highlight.js')
const HTML = require('html-parse-stringify2')

// TODO escape をどうするか
/**
 * @param {object} code
 */
function giveTags (code) {
  if (!code.language || !code.text) {
    return ''
  }
  let highlighten = hljs.highlight(code.language, code.text, true, false).value

  // html-parse-stringify2 ではスペースが無視されるので
  let fHighlighten = highlighten
    .replace(/(span>)([ ]+)(<span)/g, (m, p1, p2, p3) => {
      let spaces = p2.split('').map(() => '{#space#}').join('')
      return p1 + spaces + p3
    })
    .replace(/\n/g, '{#newline#}')

  // Use html-parse-stringify2
  let ast = HTML.parse(fHighlighten)

  // 再帰的に書き換えるやつ
  let keyArray = []
  let spanId = 1
  let rewrite = (content) => {
    let split = content.split('')
    let returnFlag = false // 改行後のスペースにタグ付与しないためのフラグ
    let tag = (char) => `<span id="code-char-${spanId++}">${char}</span>`
    let rewritten = split.map((char) => {
      switch (char) {
        case '\n':
          // とりあえず改行文字自体はタグ付与しない
          returnFlag = true
          return char
        case ' ':
          if (returnFlag) {
            return char
          } else {
            keyArray.push(' ')
            return tag(char)
          }
        default:
          returnFlag = false
          keyArray.push(char)
          return tag(char)
      }
    })
    return rewritten.join('')
  }

  function dfsAddSpan (ast) {
    ast.forEach(node => {
      if (node.type === 'text') {
        let {content} = node
        node.content = rewrite(
          content
            .replace(/{#space#}/g, ' ')
            .replace(/{#newline#}/g, '\n')
        )
      } else if (node.type === 'tag' && node.attrs.class === 'hljs-comment') {
        // コメントは無視
        let textNode = node.children[0]
        textNode.content = textNode.content
          .replace(/{#space#}/g, ' ')
          .replace(/{#newline#}/g, '\n')
      } else {
        dfsAddSpan(node.children)
      }
    })
  }

  dfsAddSpan(ast)
  let htmlString = HTML.stringify(ast)
  return {
    html: htmlString,
    keyArray
  }
}

module.exports = giveTags
