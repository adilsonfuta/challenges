import { Schema, Document, model } from 'mongoose'
import bcrypt from 'bcryptjs'
export interface User extends Document {
    name: string,
    login: string,
    password: string
}

const UserSchema = new Schema({
  name: String,
  login: {
    type: String,
    unique: true
  },
  password: String
})

UserSchema.pre<User>('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

export default model<User>('User', UserSchema)
