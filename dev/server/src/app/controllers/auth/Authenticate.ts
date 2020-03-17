import bcrypt from 'bcryptjs'
import { generateToken } from '@utils/index'
import { Request, Response } from 'express'
import User from '@models/User'

class AuthenticateController {
  async login (req:Request, res:Response): Promise<Response> {
    const { login, password } = req.body

    try {
      const user = await User.findOne({ login }).select('+password')

      if (!user) { return res.status(400).send({ error: true, message: 'Login invalido!', type: 'error' }) }
      if (!await bcrypt.compare(password, user.password)) { return res.status(400).send({ error: true, message: 'Senha invalida!', type: 'error' }) }

      user.password = undefined

      return res.json({ user, token: generateToken({ id: user.id }) })
    } catch {
      return res.status(400).send({ error: true, message: 'Erro ao se autenticar', type: 'error' })
    }
  }
}

export default new AuthenticateController()
