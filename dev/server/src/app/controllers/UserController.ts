import UserModel, { User } from '@models/User'
import { Request, Response } from 'express'
import { Crud } from '@common/crud'

class UserController implements Crud<User> {
  public async index (req: Request, res: Response): Promise<Response<User>> {
    try {
      const { id } = req.params
      const user = await UserModel.findById(id)
      return res.json(user)
    } catch (err) {
      res.status(400).send({ error: true, message: 'Erro ao buscar o usuário', type: 'error' })
    }
  }

  public async create (req: Request, res: Response): Promise<Response<User>> {
    try {
      const user = await UserModel.create(req.body)
      return res.json(user)
    } catch (err) {
      return res.status(400).send({ error: true, message: 'Erro ao cadastrar o usuário', type: 'error' })
    }
  }

  public async list (req: Request, res: Response): Promise<Response<User>> {
    try {
      const users = await UserModel.find()
      return res.json(users)
    } catch (err) {
      res.status(400).send({ error: true, message: 'Erro ao buscar os usuários', type: 'error' })
    }
  }

  public async update (req: Request, res: Response): Promise<Response<User>> {
    try {
      const { id } = req.params
      const user = await UserModel.findById(id)
      await user.set(req.body)
      await user.save()
      return res.send({ user })
    } catch (error) {
      return res.status(400).send({ error: true, message: 'Erro ao editar o usuário', type: 'error' })
    }
  }

  public async delete (req: Request, res: Response): Promise<Response<string>> {
    try {
      const { id } = req.params
      await UserModel.findByIdAndDelete(id)
      return res.json({ error: false, message: 'Usuário deletado com sucesso.', type: 'success' })
    } catch (error) {
      return res.status(400).send({ error: true, message: 'Erro ao deletar o usuário', type: 'error' })
    }
  }
}

export default new UserController()
