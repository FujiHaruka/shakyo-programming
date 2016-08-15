const hljs = require('highlight.js')
const HTML = require('html-parse-stringify2')
const Entities = require('html-entities').AllHtmlEntities
const entities = new Entities()

/**
 * @param {object} code
 */
function giveTags (code) {
  if (!code.language || !code.text) {
    return ''
  }
  let highlighten = '<span>' + hljs.highlight(code.language, code.text, true, false).value + '</span>'

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
    let specialFlag = false // HTML 特殊文字
    let specialChar = ''
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
            return tag(' ')
          }
        case '\t': // タブ文字はスペース2個に変換する
        // TODO タブ文字はスペース2個でよいのか？
          if (returnFlag) {
            return '  '
          } else {
            keyArray.push(' ')
            return tag('  ')
          }
        case '&': // 特殊文字開始
          returnFlag = false
          specialFlag = true
          specialChar = '&'
          return `<span id="code-char-${spanId++}">` + char
        case ';': // 特殊文字終了
          if (specialFlag) {
            specialFlag = false
            specialChar += ';'
            keyArray.push(entities.decode(specialChar))
            return char + '</span>'
          } else {
            // default
            returnFlag = false
            keyArray.push(char)
            return tag(char)
          }
        default:
          if (specialFlag) {
            specialChar += char
            return char
          } else {
            // default
            returnFlag = false
            keyArray.push(char)
            return tag(char)
          }
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
