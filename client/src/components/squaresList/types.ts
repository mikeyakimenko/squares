import {SquareModel} from "../square/types"

type SquaresListProps = {
  actionGetSquares: Function
  actionShowLoader: Function
  actionHideLoader: Function
  squares: SquareModel[]
}

export {SquaresListProps}