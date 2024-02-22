import { Prisma, PrismaClient } from "@prisma/client"
import { Request, Response } from "express";
import auth from '../config/auth';


const prisma = new PrismaClient();

export default  {

    async create (req: Request, res: Response) 
    {
        try {
            const token = auth.getToken(req);
            const payload = auth.decodeJWT(token);
            if (!payload) { return res.status(403).json({ message: "Não autorizado" }) }

            const { name, price, photos, features, description, state } = req.body;
            const quantity = Number(req.body.quantity)

            let productInput : Prisma.ProductCreateInput = {
                name,
                price, 
                photos,
                features,
                description,
                user: { connect: { id: Number(payload.sub) } },
                quantity,
                state,
            };

            const product = await prisma.product.create({
                data:productInput,
            });
            
            return res.status(201).json(product)
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    },

    async read (req: Request, res: Response) 
    {
        try {
            const product = await prisma.product.findMany();
            return res.status(201).json(product)
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

            const product = await prisma.product.findMany({ 
                where: { userId: Number(payload.sub) },
                include: { comments: true } 
            });

            return res.status(201).json(product)
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    },

    async update (req: Request, res: Response) {
        try 
        {
            const token = auth.getToken(req);
            const payload = auth.decodeJWT(token);
            if (!payload) { return res.status(403).json({ message: "Não autorizado" }) }
            
            const productId = Number(req.body.productId);
            const product = await prisma.product.findUnique({ where: { id: productId } }); 
            if (!product) { return res.status(404).json({ message: 'Produto não encontrado' }) }
            
            const userId = Number(payload.sub);
            const user = await prisma.user.findUnique({ where: { id: userId } }); 
            if (!user) { return res.status(404).json({ message: 'Usuário não encontrado' }) }

            if (user.role === 'MODERATOR' || userId === product?.userId) {
                const { name, price, photos, features, description, state } = req.body;
                const quantity = Number(req.body.quantity) || undefined;

                let produtoInput : Prisma.ProductUpdateInput = {
                    name,
                    price, 
                    photos,
                    features,
                    description,
                    quantity,
                    state,
                };

                const product = await prisma.product.update({
                    where: { id: productId },
                    data: produtoInput,
                });

                return res.status(201).json(product)
            } else {
                return res.status(403).json({ message: 'Usuário não autorizado' });
            }
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    },

    async destroy (req: Request, res: Response) {
        try 
        {
            const token = auth.getToken(req);
            const payload = auth.decodeJWT(token);
            if (!payload) { return res.status(403).json({ message: "Não autorizado" }) }
            
            const { productId } = req.body;
            const product = await prisma.product.findUnique({ where: { id: productId } }); 
            
            const userId = Number(payload.sub);
            const user = await prisma.user.findUnique({ where: { id: userId } }); 
            if (!user) { return res.status(404).json({ message: 'Usuário não encontrado' }) }

            if (user.role === 'MODERATOR' || userId === product?.userId) {
                await prisma.answer.deleteMany({
                    where: { productId: productId }
                });

                await prisma.comment.deleteMany({
                    where: { productId: productId }
                });

                await prisma.productsOnCart.deleteMany({
                    where: { productId: productId }
                });

                await prisma.productsOnPurchase.deleteMany({
                    where: { productId: productId }
                });

                await prisma.product.delete({
                    where: { id: productId }
                });
            } else {
                return res.status(200).json({ message: 'Usuário nao permitido' });
            }

            return res.status(200).json({ message: 'Produto deletado com sucesso' });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

}