type SquareProps = {
  id: string
  backgroundColor: string
  size: number
  borderRadius: number
  animteCreated?: boolean
  onClick?: Function
  createAnimation?: boolean
  deleteAnimation?: boolean
  deleted?: boolean
  isFirst: boolean
}

type SquareModel = {
  backgroundColor: string
  size: number
  borderRadius: number
  _id: string
}

export {
  SquareProps,
  SquareModel
}