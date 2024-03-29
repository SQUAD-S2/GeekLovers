import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import Auth from '../config/auth';
import { validationResult } from 'express-validator';

const prisma = new PrismaClient();

class CommentController {
  async create(request: Request, response: Response) {
    try {
      validationResult(request).throw();
      const token = Auth.getToken(request);
      const payload = Auth.decodeJWT(token);
      if (!payload) {
        return response.status(403).json({ message: 'Não autorizado' });
      }
      const userId = Number(payload.sub);
      const productId = Number(request.body.productId);
      const { text } = request.body;


      // checar se o produto existe
      const product = await prisma.product.findUnique({
        where: { id: productId },
      });
      if (!product) {
        return response.status(404).json({ message: 'Produto não encontrado' });
      }

      const userComment = await prisma.comment.findFirst({
        where: {
          AND: {
            userId: userId,
            productId: productId,
          },
        },
      });

      if (userComment) {
        return response.status(401).json({ message: 'Usuário já comentou' });
      }

      let commentInput: Prisma.CommentCreateInput = {
        user: { connect: { id: userId } },
        product: { connect: { id: productId } },
        text: text,
      };

      const newComment = await prisma.comment.create({
        data: commentInput,
      });
      return response.status(201).json(newComment);
    } catch (error: any) {
      return response.status(500).json({ error });
    }
  }

  async readComments(req: Request, res: Response) {
    //le todos os comentario de um produto e suas respostas
    try {
      validationResult(req).throw();
      const productId = Number(req.body.productId);
      const answers = await prisma.comment.findMany({
        where: { id: productId },
        include: { answer: true },
      });

      return res.status(201).json(answers);
    } catch (error: any) {
      return res.status(500).json({ error });
    }
  }

  async destroy(request: Request, response: Response) {
    try {
      validationResult(request).throw();
      const token = Auth.getToken(request);
      const payload = Auth.decodeJWT(token);
      if (!payload) {
        return response.status(403).json({ message: 'Não autorizado' });
      }
      const userId = Number(payload.sub);
      const productId = Number(request.body.productId);
      // checar se o produto existe
      const product = await prisma.product.findUnique({
        where: { id: productId },
      });
      if (!product) return response.status(404).json({ message: 'Produto não encontrado' });

      // checar se usuário existe
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
      if (!user) return response.status(404).json({ message: 'Usuário não encontrado' });

      // checar se o comentário existe
      const comment = await prisma.comment.findFirst({
        where: {
          AND: {
            userId: userId,
            productId: productId,
          },
        },
      });
      if (!comment) return response.status(404).json({ message: 'Comentário não encontrado' });

      // checar se usuário é dono do comentário ou é moderador
      if (!(user.role === 'MODERATOR' || userId === comment.userId)) {
        return response.status(403).json({ message: 'Usuário não tem permissão' });
      }

      const deletedComment = await prisma.comment.deleteMany({
        where: {
          AND: {
            userId: userId,
            productId: productId,
          },
        },
      });
      return response.status(201).json(deletedComment);
    } catch (error: any) {
      return response.status(500).json({ error });
    }
  }
}

export default new CommentController();
