import * as mongoose from 'mongoose'
import { SquareDbModel } from './types'

const SquareSchema = new mongoose.Schema(
  {
    backgroundColor: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    borderRadius: {
      type: Number,
      required: true
    }
  }, 
  {
    timestamps: true,
    versionKey: false
  }, 
)

const Square = mongoose.model<SquareDbModel>('Square', SquareSchema)

export default Square
