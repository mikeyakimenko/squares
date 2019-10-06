import {Router} from 'express'
import Document from 'mongoose'

interface ApiControllerInterface {
  path: string
  router: Router
}

type ApiMessage = {
  [key: string]: string
}

type SquareModel = {
  backgroundColor: string
  size: number
  borderRadius: number
}

type SquareDbModel = SquareModel & Document

export {
  ApiControllerInterface,
  ApiMessage,
  SquareModel,
  SquareDbModel
}