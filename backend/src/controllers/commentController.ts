import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import Utils from './utils';

const prisma = new PrismaClient();

class CommentController {
  async create(request: Request, response: Response) {
    try {
      const cookiesHeader = request.headers.cookie;

      if (cookiesHeader) {
        const userId = Utils.getIdFromCookies(cookiesHeader);
        const { productId, text } = request.body;

        // checar se o produto existe
        const product = await prisma.product.findUnique({
          where: { id: productId },
        });
        if (!product) {
          return response.status(404).json({ message: 'Produto não encontrado' });
        }

        // checar se usuário existe
        const user = await prisma.user.findUnique({
          where: { id: userId },
        });
        if (!user) return response.status(404).json({ message: 'Usuário não encontrado' });

        let commentInput: Prisma.CommentCreateInput = {
          user: { connect: { id: userId } },
          product: { connect: { id: productId } },
          text: text,
        };

        const newComment = await prisma.comment.create({
          data: commentInput,
        });
        return response.status(201).json(newComment);
      } else {
        return response.status(401).json({ message: 'Usuário não autenticado' });
      }
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }

  async destroy(request: Request, response: Response) {
    try {
      const cookiesHeader = request.headers.cookie;

      if (cookiesHeader) {
        const userId = Utils.getIdFromCookies(cookiesHeader);
        const productId = request.body.productId;
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
        const comment = await prisma.comment.findUnique({
          where: {
            userId_productId: { userId: userId, productId: productId },
          },
        });
        if (!comment) return response.status(404).json({ message: 'Comentário não encontrado' });

        // checar se usuário é dono do comentário ou é moderador
        if (!(user.role === 'MODERATOR' || productId === comment.productId)) {
          return response.status(403).json({ message: 'Usuário não tem permissão' });
        }

        const deletedComment = await prisma.comment.delete({
          where: {
            userId_productId: { userId: userId, productId: productId },
          },
        });
        return response.status(201).json(deletedComment);
      } else {
        return response.status(401).json({ message: 'Usuário não autenticado' });
      }
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }
}
