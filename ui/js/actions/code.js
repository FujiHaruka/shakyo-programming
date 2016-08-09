import calcCodeInfo from '../util/calc_code_info'

/**
 * Action of code
 */
const setCode = ({text, language}) => {
  let {count, keyArray} = calcCodeInfo(text)
  return {
    type: 'SET_CODE',
    code: {
      text,
      language,
      count,
      keyArray
    }
  }
}

export default setCode
