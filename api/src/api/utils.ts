import {Response} from 'express'
import {ApiMessage} from './types'

const errorHandler = (error: any, response: Response): void => {
  switch (process.env.NODE_ENV) {
    case 'production':
      response.status(500).send({error: 'error 500'} as ApiMessage)
    case 'development':
      if (error.name === 'MongoError' && error.code === 11000) {
        response.status(409).send({error: `Duplicate key: ${error}`} as ApiMessage)
      }
      response.status(500).send({error: error} as ApiMessage)
  }
}

export {errorHandler}