import { Schema, Document, model } from 'mongoose'

export interface Occurence extends Document {
    name: string;
    level: string;
    lat: number;
    lng: number;
}

const OccurenceSchema = new Schema({
  name: String,
  level: String,
  lat: Number,
  lng: Number
})

export default model<Occurence>('Occurence', OccurenceSchema)
