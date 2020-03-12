import jwt, { VerifyErrors } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { Auth } from '../config/auth'

export default function(req:Request, res:Response, next:NextFunction): Response<string> {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({ error: 'Nenhum token fornecido' });

    const parts = authHeader.split(' ');

    if(!(parts.length === 2))
        return res.status(401).send({ error: 'Erro no token' });

    const[ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token mal formatado'});

    jwt.verify(token, Auth.secret, (err:VerifyErrors, decoded:object) => {
        if(err) return res.status(401).send({ error: 'Token invalido' });    

        // req.userId = decoded.id;

        return next();
    });
}