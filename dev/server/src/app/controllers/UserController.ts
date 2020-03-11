import UserModel, { User } from '../models/User'
import { Request, Response } from 'express'
import { Crud } from '../common/crud'

class UserController implements Crud<User> {
  public async index (req: Request, res: Response): Promise<Response<User>> {
    try {
      const { id } = req.params
      const user = await UserModel.findById(id)
      return res.json(user)
    } catch (err) {
      res.status(400).send({ message: 'Erro ao buscar o usuário' })
    }
  }

  public async create (req: Request, res: Response): Promise<Response<User>> {
    return res.send()
  }

  public async list (req: Request, res: Response): Promise<Response<User>> {
    try {
      const users = await UserModel.find()
      return res.json(users)
    } catch (err) {
      res.status(400).send({ message: 'Erro ao buscar os usuários' })
    }
  }

  public async update (req: Request, res: Response): Promise<Response<User>> {
    return res.send()
  }

  public async delete (req: Request, res: Response): Promise<string> {
    return 'Hello World'
  }

  public async authenticate (req: Request, res: Response): Promise<string> {
    return 'Hello World'
  }
}

export default new UserController()
