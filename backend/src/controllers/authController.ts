import { Request, Response } from 'express';
import Auth from '../config/auth';
import Utils from './utils';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AuthController {
  async login(request: Request, response: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: { email: request.body.email },
      });
      if (!user) {
        return response
          .status(404)
          .json({ message: 'Usuário não encontrado.' });
      }
      const { password } = request.body;
      if (Auth.checkPassword(password, user.hash, user.salt)) {
        const token = Auth.generateJWT(user);
        response.cookie('tokenAuth', token, {
          httpOnly: true,
          sameSite: 'strict',
          secure: true,
          maxAge: 1296000, // validade de 15 dias
        });

        return response.status(200).json({ email: user.email });
      } else {
        return response.status(401).json({ message: 'Senha invalida' });
      }
    } catch (error) {
      return response.status(500).json({ err: error });
    }
  }

  async getDetails(request: Request, response: Response) {
    try {
      const cookiesHeader = request.headers.cookie;

      if (cookiesHeader) {
        const id = Utils.getIdFromCookies(cookiesHeader);

        const user = await prisma.user.findUnique({
          where: { id: id },
        });

        if (!user)
          return response
            .status(404)
            .json({ message: 'Usuário não encontrado.' });
        return response.status(200).json({ user: user });
      }
    } catch (error) {
      return response.status(500).json({ err: error });
    }
  }
}

export default new AuthController();
