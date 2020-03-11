import { Schema, Document, model } from 'mongoose'

export interface User extends Document {
    name: string,
    avatar: string,
    login: string,
    password: string
}

const UserSchema = new Schema({
  name: String,
  avatar: String,
  login: String,
  password: String
})

export default model<User>('User', UserSchema)
