import { Router, Request, Response } from "express";
import { Usuario } from '../models/usuario.model';

const userRoutes = Router();

userRoutes.post('/create', (req: Request, res: Response) => {
  const user = {
    nombre   : req.body.nombre,
    email    : req.body.email,
    password : req.body.password,
    avatar   : req.body.avatar
  };

  Usuario.create(user)
    .then(userDB => {
      res.json({
        ok: true,        
        user: userDB
      });
    }).catch(err => {
      res.json({
        ok: false,        
        err
      });
    });

});

export default userRoutes; // Indica que userRoutes será exportable y la podremos usar en otro módulo