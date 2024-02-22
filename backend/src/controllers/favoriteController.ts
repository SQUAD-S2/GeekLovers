import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import Utils from './utils';
import Auth from '../config/auth';

const prisma = new PrismaClient();

class FavoriteController {
  async create(request: Request, response: Response) {
    try {
      const token = Auth.getToken(request);
      const payload = Auth.decodeJWT(token);
      if (!payload) {
        return response.status(403).json({ message: 'Não autorizado' });
      }
      const userId = Number(payload.sub);
      let favoritesInput: Prisma.FavoritesCreateInput = {
        user: { connect: { id: userId } },
      };

      const newFavorites = await prisma.favorites.create({
        data: favoritesInput,
      });
      return response.status(201).json(newFavorites);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }

  async favoriteProduct(request: Request, response: Response) {
    try {
      const token = Auth.getToken(request);
      const payload = Auth.decodeJWT(token);
      if (!payload) {
        return response.status(403).json({ message: 'Não autorizado' });
      }
      const userId = Number(payload.sub);
      const productId = request.body.productId;

      const product = await prisma.product.findUnique({
        where: { id: productId },
      });
      if (!product) {
        return response.status(404).json({ message: 'Produto não encontrado' });
      }

      const updatedFavorites = await prisma.favorites.update({
        where: {
          userId: userId,
        },
        data: {
          products: { connect: { id: productId } },
        },
      });

      return response.status(201).json(updatedFavorites);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }

  async unFavoriteProduct(request: Request, response: Response) {
    try {
      const token = Auth.getToken(request);
      const payload = Auth.decodeJWT(token);
      if (!payload) {
        return response.status(403).json({ message: 'Não autorizado' });
      }
      const userId = Number(payload.sub);
      const productId = request.body.productId;

      const product = await prisma.product.findUnique({
        where: { id: productId },
      });
      if (!product) {
        return response.status(404).json({ message: 'Produto não encontrado' });
      }

      const updatedFavorites = await prisma.favorites.update({
        where: {
          userId: userId,
        },
        data: {
          products: { disconnect: { id: productId } },
        },
      });

      return response.status(201).json(updatedFavorites);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }

  async getFavorites(request: Request, response: Response) {
    try {
      const token = Auth.getToken(request);
      const payload = Auth.decodeJWT(token);
      if (!payload) {
        return response.status(403).json({ message: 'Não autorizado' });
      }
      const userId = Number(payload.sub);

      const favorites = await prisma.favorites.findUnique({
        where: { userId: userId },
        include: { products: true },
      });

      return response.status(201).json(favorites);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }
}

export default new FavoriteController();
