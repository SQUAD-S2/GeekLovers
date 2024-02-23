import { Prisma, PrismaClient } from "@prisma/client"
import { Request, Response } from "express";
import auth from '../config/auth';
import { validationResult } from 'express-validator';


const prisma = new PrismaClient();

export default  {

    async addProduct (req: Request, res: Response) 
    {
        try {
            validationResult(req).throw();
            const token = auth.getToken(req);
            const payload = auth.decodeJWT(token);
            if (!payload) { return res.status(403).json({ message: "Não autorizado" }) }

            const userId = Number(payload.sub);
            const productId = Number(req.body.productId);

            let cartProductInput : Prisma.ProductsOnCartCreateInput = {
                user: { connect: { userId: userId } },
                product: { connect: { id: productId } },
                quantity: 1
            };

            const usuario = await prisma.user.findUnique({ where: { id: userId } });
            if (!usuario) { return res.status(404).json({ error: "Usuário não encontrado" }) }

            const produto = await prisma.product.findUnique({ where: { id: productId } });
            if (!produto) { return res.status(404).json({ error: "Produto não encontrado" }) }
            

            // UPDATE da tabela Cart
            const cart = await prisma.cart.findUnique({ where: { userId: userId }});

            const newQuantity = (cart?.quantity || 0) + 1;
            const newTotal = (cart?.total.toNumber() || 0) + (produto.price?.toNumber() ?? 0);

            await prisma.cart.update({
                where: { userId: userId },
                data: { total: newTotal, quantity: newQuantity }
            });


            // UPDATE da tabela ProductsOnCart
            const isPresent = await prisma.productsOnCart.findFirst({
                where: { userId: userId, productId: productId }
            });

            if (isPresent) {
                await prisma.productsOnCart.update({
                    where: { userId_productId: { userId: userId, productId: productId } },
                    data: { quantity: isPresent.quantity + 1 }
                });
            } else {
                await prisma.productsOnCart.create({ data: cartProductInput });
            }

            return res.status(201).json({ message: "Item adicionado ao carrinho" });
        } catch (error: any) {
            return res.status(500).json({ error });
        }
    },

    async removeProduct (req: Request, res: Response) 
    {
        // reduzir a quantidade de um produto no carrinho
        try {
            validationResult(req).throw();
            const token = auth.getToken(req);
            const payload = auth.decodeJWT(token);
            if (!payload) { return res.status(403).json({ message: "Não autorizado" }) }

            const userId = Number(payload.sub);
            const productId = Number(req.body.productId);
            const item = await prisma.productsOnCart.findFirst({ where: { userId: userId, productId: productId }}); 
            if (!item) { return res.status(404).json({ error: "Produto não existe nesse carrinho" }) }
            

            // UPDATE da tabela Cart
            const product = await prisma.product.findUnique({where: { id: productId }});
            const cart = await prisma.cart.findUnique({where: { userId: userId }}); 

            const newTotal = (cart?.total.toNumber() || 0) - (product?.price.toNumber() || 0);
            const newQuantity = (cart?.quantity || 0) - 1;

            await prisma.cart.update({ where: { userId: userId }, data: { total: newTotal, quantity: newQuantity } });


            // UPDATE da tabela ProductsOnCart
            let quantity_items = 0;
            if (item?.quantity) 
                quantity_items = item.quantity;

            if (quantity_items > 1) {
                await prisma.productsOnCart.update({
                    where: { userId_productId: { userId: userId, productId: productId } },
                    data: { quantity: quantity_items - 1 }
                });
            } else {
                await prisma.productsOnCart.delete({
                    where: { userId_productId: { userId: userId, productId: productId } }
                });
            }
            return res.status(201).json({ message: "Item removido do carrinho" });
        } catch (error: any) {
            return res.status(500).json({ error });
        }
    },
    
    async destroy (req: Request, res: Response)
    {
        /// excluir um produto do carrinho
        try {
            validationResult(req).throw();
            const token = auth.getToken(req);
            const payload = auth.decodeJWT(token);
            if (!payload) { return res.status(403).json({ message: "Não autorizado" }) }

            const userId = Number(payload.sub);
            const productId = Number(req.body.productId);

            const productCart = await prisma.productsOnCart.findFirst({ where: { userId: userId, productId: productId }} );
            if (!productCart) { return res.status(404).json({ error: "Produto não existe nesse carrinho" }) }

            // UPDATE da tabela Cart
            const cart = await prisma.cart.findUnique({where: { userId: Number(userId) }});
            const product = await prisma.product.findUnique({where: { id: productId }});
            
            const newTotal = (cart?.total.toNumber() || 0) - ((product?.price.toNumber() || 0) * (productCart?.quantity || 0));
            const newQuantity = (cart?.quantity || 0) - (productCart?.quantity || 0);

            await prisma.cart.update({
                where: { userId: Number(userId) },
                data: { total: newTotal, quantity: newQuantity }
            });

            // Removendo da tabela ProductsOnCart
            await prisma.productsOnCart.delete({
                where: { userId_productId: { userId: userId, productId: productId } }
            });
    
            return res.status(200).json({ message: 'Produto removido' });
        } catch (error: any) {
            return res.status(500).json({ error });
        }
    }

}