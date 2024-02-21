import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import Auth from '../config/auth';

const prisma = new PrismaClient();

class UserController {
  async create(request: Request, response: Response) {
    try {
      const {
        cpf,
        email,
        name,
        birthDate,
        profilePicture,
        status,
        card,
        address,
        phone,
        role,
        password,
      } = request.body;
      const { hash, salt } = Auth.generatePassword(password);
      let userInput: Prisma.UserCreateInput = {
        cpf,
        email,
        name,
        birthDate,
        profilePicture,
        status,
        card,
        address,
        phone,
        role,
        hash,
        salt,
      };

      const user = await prisma.user.create({ data: userInput });
      return response.status(201).json(user);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }

  async show(request: Request, response: Response) {
    try {
      const user = await prisma.user.findMany();
      return response.status(201).json(user);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }

  async index(request: Request, response: Response) {
    try {
      const token = Auth.getToken(request);
      const payload = Auth.decodeJWT(token);
      if (!payload) {
        return response.status(403).json({ message: 'Não autorizado' });
      }
      const userId = Number(payload.sub);
      const user = await prisma.user.findUnique({
        where: {
          id: Number(userId),
        },
      });
      return response.status(201).json(user);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }

  async update(request: Request, response: Response) {
    try {
      const token = Auth.getToken(request);
      const payload = Auth.decodeJWT(token);
      if (!payload) {
        return response.status(403).json({ message: 'Não autorizado' });
      }
      const userId = Number(payload.sub);
      const { email, name, profilePicture, status, card, address, phone, role } = request.body;
      let userInput: Prisma.UserUpdateInput = {
        email,
        name,
        profilePicture,
        status,
        card,
        address,
        phone,
        role,
      };

      const user = await prisma.user.update({
        where: { id: userId },
        data: userInput,
      });

      return response.status(201).json(user);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }

  async updatePassword(request: Request, response: Response) {
    try {
      const token = Auth.getToken(request);
      const payload = Auth.decodeJWT(token);
      if (!payload) {
        return response.status(403).json({ message: 'Não autorizado' });
      }
      const userId = Number(payload.sub);

      // encontrar usuário pelo id
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        return response.status(404).json({ message: 'Usuário não encontrado.' });
      }

      // usuário precisa informar a senha atual para poder altera-la
      const { newPassword, currentPassword } = request.body;
      if (Auth.checkPassword(currentPassword, user.hash, user.salt)) {
        const { hash, salt } = Auth.generatePassword(newPassword);

        let userInput: Prisma.UserUpdateInput = {
          hash: hash,
          salt: salt,
        };
        const updatedUser = await prisma.user.update({
          where: { id: userId },
          data: userInput,
        });
        return response.status(201).json(updatedUser);
      } else {
        return response.status(401).json({ message: 'Senha Atual incorreta.' });
      }
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }

  async destroy(request: Request, response: Response) {
    try {
      const token = Auth.getToken(request);
      const payload = Auth.decodeJWT(token);
      if (!payload) {
        return response.status(403).json({ message: 'Não autorizado' });
      }
      const userId = Number(payload.sub);
      const user = await prisma.user.delete({
        where: {
          id: Number(userId),
        },
      });
      return response.status(201).json(user);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();
