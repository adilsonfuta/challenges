import { Auth } from '@config/auth'
import jwt from 'jsonwebtoken'

export function generateToken (params:Record<string, any> = {}): string {
  return jwt.sign(params, Auth.secret, {
    expiresIn: 86400
  })
}

module.exports = { generateToken }
