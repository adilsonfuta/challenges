import { Schema, Document, model } from 'mongoose'
import { Hero } from './Hero'
import { Occurence } from './Occurence'

export interface Battle extends Document {
    hero: Hero;
    occurence: Occurence;
}

const BattleSchema = new Schema({
  hero: {
    type: Schema.Types.ObjectId,
    ref: 'Hero'
  },
  occurence: {
    type: Schema.Types.ObjectId,
    ref: 'Occurence'
  }
})

export default model<Battle>('Battle', BattleSchema)
