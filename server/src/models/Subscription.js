import { Timestamp } from 'mongodb'
import mongoose from 'mongoose'

const subsciptionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  periodity: {
    type: String,
    required: true
  },
  dueDate: {
    type: String,
    required: true
  },
  userId: {
    type: String
  }
}, { with: Timestamp })

export default mongoose.model('Subscription', subsciptionSchema)
