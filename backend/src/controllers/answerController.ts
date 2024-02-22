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

            const {
                text,
                userId,
                productId
            } = req.body;

            let answerInput: Prisma.AnswerCreateInput = {
                text: text,
                
                user: { connect: { id: Number(payload.sub) } },
                comment: { connect: { userId_productId: { userId, productId } } }
            };
            const newAnswer = await prisma.answer.create({ data: answerInput });

            return res.status(201).json(newAnswer)
        } catch (error: any) {
            return res.status(500).json({error: error.message})
        }
    },

    async readProduct (req: Request, res: Response) 
    {
        try {

            const { productId } = req.body;
            const answers = await prisma.answer.findMany({ where: { productId: productId } });

            return res.status(201).json(answers)
        } catch (error: any) {
            return res.status(500).json({error: error.message})
        }
    },

    async destroy (req: Request, res: Response) 
    {
        try {
            const token = auth.getToken(req);
            const payload = auth.decodeJWT(token);
            if (!payload) { return res.status(403).json({ message: "Não autorizado" }) }

            const userId = Number(payload.sub);
            const user = await prisma.user.findUnique({ where: { id: userId } }); 

            const { commentUserId, productId } = req.body;

            const answer = await prisma.answer.findFirst({ where: { userId: commentUserId, productId: productId }} );
            if (!answer) { return res.status(404).json({ error: "Resposta não encontrada" }) }

            if (!(user?.role === 'MODERATOR' || userId === answer?.userId)) {
                await prisma.answer.delete({
                    where: { buyerId_productId: { buyerId: commentUserId, productId: productId } }
                })
            } else {
                return res.status(200).json({ message: 'Usuário não autorizado' });
            }
    
            return res.status(200).json({ message: 'Resposta removida' });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    },

}