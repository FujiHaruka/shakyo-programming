/**
 * Reducer of theme color string.
 */
const themeColor = (state = '#ff5', action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return action.color
    default:
      return state
  }
}

export default themeColor
