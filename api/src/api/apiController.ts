import {Request, Response, Router} from 'express'

import {
  ApiControllerInterface, 
  ApiMessage,
  SquareDbModel,
  SquareModel
} from './types'
import {errorHandler} from './utils'
import Square from './model'


class ApiController implements ApiControllerInterface {
  private model: SquareDbModel
  public path: string
  public router: Router

  constructor() {
    this.model = Square
    this.path = '/squares'
    this.router = Router()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get('/', this.getSquares)
    this.router.post('/', this.createSquare)
    this.router.delete('/', this.deleteSquare)
  }

  private getSquares = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    const squares = await this.model.find({}).sort('-createdAt')
    try {
      response.status(200).send(squares as SquareDbModel[])
    } catch (error) {
      errorHandler(error, response)
    }
  }

  private createSquare = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    const square = new this.model(request.body as SquareModel)
    const result = await square.save()
    try {
      const {__v, ...toResponse} = result._doc
      response.status(201).send({
        message: "Was create a square!",
        square: toResponse
      } as any)
    } catch (error) {
      errorHandler(error, response)
    }
  }

  private deleteSquare = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      await this.model.findOneAndDelete({'_id': request.body.id})
      response.status(200).send({
        message: "Square was deleted!"
      } as ApiMessage)
    } catch (error) {
      errorHandler(error, response)
    }
  }
}

export default ApiController