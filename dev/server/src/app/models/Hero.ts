import { Schema, Document, model } from 'mongoose'
export interface Hero extends Document {
    name: string;
    rank: string;
    lat: number;
    lng: number;
}

const HeroSchema = new Schema({
    name: String,
    rank: String,
    lat: Number,
    lng: Number
})

export default model<Hero>('Hero', HeroSchema)
