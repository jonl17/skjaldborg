import { SET_PLATFORM, TRIGGER_MENU, CHANGE_LANGUAGE } from "./action"

const initialState = {
  platform: null,
  menu: `closed`,
  icelandic: true,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLATFORM:
      let platform
      if (action.width <= 750) {
        platform = `mobile`
      }
      if (action.width > 750 && action.width <= 1050) {
        platform = `tablet`
      }
      if (action.width > 1050) {
        platform = `desktop`
      }
      return { ...state, platform: platform }
    case TRIGGER_MENU:
      return { ...state, menu: action.trigger }
    case CHANGE_LANGUAGE:
      return { ...state, icelandic: !state.icelandic }
    default:
      return state
  }
}

export default reducer
