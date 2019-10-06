import {SquaresActionTypes} from "./types"
import {SquareModel} from "../../components/square/types"

const reducerSquares = (state = [] as SquareModel[], action) => {
  switch (action.type) {
    case SquaresActionTypes.GET_SQUARES:
      return action.payload.map(item => {
        const {createdAt, updatedAt, ...toStore } = item
        return toStore
      })
    default:
      return state
  }
}

export {reducerSquares}