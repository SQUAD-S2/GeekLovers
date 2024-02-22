import { Request, Response } from 'express';
import Auth from '../config/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AuthController {
  async login(request: Request, response: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: { email: request.body.email },
      });
      if (!user) {
        return response.status(404).json({ message: 'Usuário não encontrado.' });
      }
      const { password } = request.body;
      if (Auth.checkPassword(password, user.hash, user.salt)) {
        const token = Auth.generateJWT(user);
        return response.status(200).json({ token: token });
      } else {
        return response.status(401).json({ message: 'Senha invalida' });
      }
    } catch (error) {
      return response.status(500).json({ err: error });
    }
  }

  async getDetails(request: Request, response: Response) {
    try {
      const token = Auth.getToken(request);
      const payload = Auth.decodeJWT(token);
      const userId = Number(payload.sub);

      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) return response.status(404).json({ message: 'Usuário não encontrado.' });
      return response.status(200).json({ user: user });
    } catch (error: any) {
      return response.status(500).json({ err: error });
    }
  }
}

export default new AuthController();
