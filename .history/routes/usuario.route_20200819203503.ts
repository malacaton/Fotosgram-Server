import { Router, Request, Response } from "express";

const userRoutes = Router();

userRoutes.post('/prueba', (req: Request, resp: Response) => {
  resp.json({
    ok: true,
    mensaje: 'Todo funciona bien'
  });
});

export default userRoutes; // Indica que userRoutes será exportable y la podremos usar en otro módulo