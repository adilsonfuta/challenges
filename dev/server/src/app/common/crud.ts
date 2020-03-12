import { Request, Response } from 'express'
export interface Crud<T> {
    create(req: Request, res: Response): Promise<Response<T>>;
    index(req: Request, res: Response): Promise<Response<T>>;
    list(req: Request, res: Response): Promise<Response<T>>;
    update(req: Request, res: Response): Promise<Response<T>>;
    delete(req: Request, res: Response): Promise<Response<string>>;
}
