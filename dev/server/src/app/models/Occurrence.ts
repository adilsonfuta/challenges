import { Schema, Document, model } from 'mongoose'

export interface Occurrence extends Document {
    name: string;
    level: string;
    lat: number;
    lng: number;
}

const OccurrenceSchema = new Schema({
  name: String,
  level: String,
  lat: Number,
  lng: Number
})

export default model<Occurrence>('Occurrence', OccurrenceSchema)
