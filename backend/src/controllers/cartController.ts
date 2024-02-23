import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import auth from '../config/auth';


const prisma = new PrismaClient();

export default  {

    async create (req: Request, res: Response) 
    {
        try {
            const token = auth.getToken(req);
            const payload = auth.decodeJWT(token);
            if (!payload) { return res.status(403).json({ message: "Não autorizado" }) }

            const userId = Number(payload.sub);

            let cartInput: Prisma.CartCreateInput = {
                user: { connect: { id: userId } },
                quantity: 0,
                total: 0
            };

            const newCart = await prisma.cart.create({ data: cartInput });

            return res.status(201).json(newCart)
        } catch (error: any) {
            return res.status(500).json({error: error.message})
        }
    },

    async readUser (req: Request, res: Response) 
    {
        try {
            const token = auth.getToken(req);
            const payload = auth.decodeJWT(token);
            if (!payload) { return res.status(403).json({ message: "Não autorizado" }) }

            const cart = await prisma.cart.findUnique({ 
                where: { userId: Number(payload.sub) },
                include: { products: true },
            });
            
            return res.status(201).json(cart)
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    },

    async emptyCart (req: Request, res: Response) 
    {
        try {
            const token = auth.getToken(req);
            const payload = auth.decodeJWT(token);
            if (!payload) { return res.status(403).json({ message: "Não autorizado" }) }

            // UPDATE das tabelas ProductsOnCart e Cart
            const userId = Number(payload.sub);
            await prisma.productsOnCart.deleteMany({ where: { userId: userId } });
            await prisma.cart.update({ where: { userId: userId }, data: { total: 0, quantity: 0 } });

            return res.status(200).json({ message: 'Carrinho esvaziado' });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }
}