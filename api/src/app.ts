import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import * as cors from 'cors'
import * as timeout from 'connect-timeout'
import {ApiControllerInterface} from 'api/types'
import ApiController from './api/apiController'


class App {
  private app: express.Application
  public port: number
  private api: ApiControllerInterface

  constructor(port) {
    this.app = express()
    this.port = port
    this.api = new ApiController()
  
    this.initializeDB()
    this.initializeMiddlewares()
    this.initializeControllers()
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(bodyParser.json())
    this.app.use(cors({
      origin: '*',
      allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
      credentials: true,
      methods: "GET, HEAD, OPTIONS, PUT, PATCH, POST, DELETE",
      preflightContinue: false
    }))
  }

  private initializeDB() {
    (<any>mongoose).Promise = global.Promise
    mongoose.set('useFindAndModify', false)
    mongoose.connect('mongodb://localhost/squaresapp', {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }

  private initializeControllers() {
    this.app.use(this.api.path, this.api.router)
  }

  public listen () {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`)
    })
  }
}

export default App