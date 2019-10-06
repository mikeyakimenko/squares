import { AnimateSquareActionTypes } from "./types";

const actionRunAnimation = () => ({
  type: AnimateSquareActionTypes.RUN_ANIMATION
})

const actionStopAnimation = () => ({
  type: AnimateSquareActionTypes.STOP_ANIMATION
})

export {
  actionRunAnimation,
  actionStopAnimation
}