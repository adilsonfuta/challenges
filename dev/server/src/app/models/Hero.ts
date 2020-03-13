import { Schema, Document, model } from 'mongoose'
export interface Hero extends Document {
    name: string;
    class: string;
    lat: number;
    lng: number;
    allocated: boolean;
}

const HeroSchema = new Schema({
  name: String,
  class: String,
  lat: Number,
  lng: Number,
  allocated: {
    type: Boolean,
    required: false,
    default: false
  }
})

export default model<Hero>('Hero', HeroSchema)
