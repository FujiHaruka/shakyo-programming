/**
 * Calculate code count and keyArray
 * 改行と改行直後の空白文字を無視する
 */
function calcCodeInfo (codeText) {
  let formated = codeText.replace(/\n\s*/, '')
  return {
    count: formated.length,
    keyArray: formated.split('')
  }
}

module.exports = calcCodeInfo
