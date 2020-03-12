import { Auth } from '../config/auth'
import jwt from 'jsonwebtoken'


export function generateToken(params:Object = {}): string {
    return jwt.sign(params, Auth.secret, {
        expiresIn: 86400,
    });
}

module.exports = { generateToken };