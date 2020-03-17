import { Schema, Document, model } from 'mongoose'
import { Hero } from './Hero'
import { Occurrence } from './Occurrence'

export interface Battle extends Document {
    hero: Hero;
    occurrence: Occurrence;
}

const BattleSchema = new Schema({
  hero: {
    type: Schema.Types.ObjectId,
    ref: 'Hero'
  },
  occurrence: {
    type: Schema.Types.ObjectId,
    ref: 'Occurrence'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default model<Battle>('Battle', BattleSchema)
