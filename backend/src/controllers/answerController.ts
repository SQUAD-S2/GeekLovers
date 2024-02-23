import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response, response } from 'express';
import { validationResult } from 'express-validator';
import auth from '../config/auth';


const prisma = new PrismaClient();

export default  {

    async create (req: Request, res: Response) 
    {
        try {
            validationResult(req).throw();
            const token = auth.getToken(req);
            const payload = auth.decodeJWT(token);
            if (!payload) { return res.status(403).json({ message: "Não autorizado" }) }

            const productId = Number(req.body.productId);
            const ownerEmail = req.body.userEmail;
            const owner = await prisma.user.findUnique({
              where: { email: ownerEmail },
            });
            if (!owner) {
              return response.status(404).json({ message: 'usuário não encontrado' });
            }
            const { text } = req.body;

            const comment = await prisma.comment.findFirst({
              where: {
                AND: {
                    userId: owner.id,
                    productId: productId,
                },
              },
            });

            if(!comment) {
                return response.status(404).json({message: 'Comentário não encontrado'})
            }

            let answerInput: Prisma.AnswerCreateInput = {
                text: text,
                
                user: { connect: { id: Number(payload.sub) } },
                comment: { connect: { id: comment.id } }
            };
            console.log(answerInput.comment);
            
            const newAnswer = await prisma.answer.create({ data: answerInput });
            console.log(newAnswer);
            

            return res.status(201).json(newAnswer)
        } catch (error: any) {
            return res.status(500).json({error: error.message})
        }
    },

    

    async destroy (req: Request, res: Response) 
    {
        try {
            validationResult(req).throw();
            const token = auth.getToken(req);
            const payload = auth.decodeJWT(token);
            if (!payload) { return res.status(403).json({ message: "Não autorizado" }) }

            const userId = Number(payload.sub);
            const ownerEmail = req.body.userEmail;
            const user = await prisma.user.findUnique({ where: { id: userId } });
            if (!user) {
              return response.status(404).json({ message: 'usuário não encontrado' });
            }

            const owner = await prisma.user.findUnique({
                where: {email: ownerEmail}
            })
            if (!owner) {
              return response.status(404).json({ message: 'usuário não encontrado' });
            }

            const productId = Number(req.body.productId);

            const comment = await prisma.comment.findFirst({
              where: {
                AND: {
                  userId: owner.id,
                  productId: productId,
                },
              },
            });

            if (!comment) {
              return response.status(404).json({ message: 'Comentário não encontrado' });
            }


            const answer = await prisma.answer.findFirst({ where: { commentId: comment.id }} );
            if (!answer) { return res.status(404).json({ error: "Resposta não encontrada" }) }

            if (user.role === 'MODERATOR' || userId === answer?.userId) {
                await prisma.answer.delete({
                    where: { commentId: comment.id }
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