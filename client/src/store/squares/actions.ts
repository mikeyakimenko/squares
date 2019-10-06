import {SquaresActionTypes} from "./types"

const actionGetSquares = (squares) => ({
  type: SquaresActionTypes.GET_SQUARES,
  payload: squares
})

export {actionGetSquares}