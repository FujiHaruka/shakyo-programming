import giveTags from '../util/give_tags'

/**
 * Action of code
 */
const setCode = (code) => {
  let {text, language} = code
  let { html, keyArray } = giveTags(code)
  return {
    type: 'SET_CODE',
    code: {
      text,
      html,
      language,
      count: keyArray.length,
      keyArray
    }
  }
}

export default setCode
