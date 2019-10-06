import { AnimateSquareActionTypes } from "./types"

const reducerAnimateSquare = (state: boolean = false, action) => {
  switch (action.type) {
    case AnimateSquareActionTypes.RUN_ANIMATION:
      return true
    case AnimateSquareActionTypes.STOP_ANIMATION:
      return false
    default:
      return state
  }
}

export {reducerAnimateSquare}