import { Prisma, PrismaClient } from "@prisma/client";
import auth from '../config/auth';
import multer from "multer"
import path from 'path';

const prisma = new PrismaClient();

const storage = (model: 'user' | 'product') => multer.diskStorage ({

	destination: function (req, file, cb) { 
        let dest = path.join(__dirname, "..", "..", "uploads")
        cb(null, dest) 
    },

    filename: async function (req, file, cb) 
    {
        const token = auth.getToken(req);
        const payload = auth.decodeJWT(token);
        if (!payload) { return cb(new Error("Não autorizado"), '') }

        const userId = Number(payload.sub);

        console.log(userId);

        let filename = '';
        if (model === 'user') 
        {
            const user = await prisma.user.findUnique({ where: { id: userId } });
            if (!user) { return cb(new Error("Usuário não encontrado"), '') }

            filename = model + '-' + user.id + '-';

            console.log(filename);
        } 
        else if (model === 'product') 
        {
            const productId = req.body.productId;
            const product = await prisma.product.findUnique({ where: { id: productId } });
            if (!product) { return cb(new Error("Produto não encontrado"), '') }
            
            filename = model + product.name;
        } else { return cb(new Error("Model não suportada"), '') }
        
        const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        filename += uniqueSuffix + extension;

        console.log(filename);

        try {
            if (model === 'user') 
            {
                await prisma.user.update({ where: {id: userId}, data: {profilePicture: filename} });
                 
            } 
            else if (model === 'product') 
            {
                await prisma.product.update({ where: {id: req.body.productId}, data: {photos: { push: filename }} });
            }
        } catch (error) {
            throw (error); 
        }
    }

});


const uploadPicture = (model: 'user' | 'product') => multer({

    storage: storage(model),
    limits: { fileSize: 10 * 1024 * 1024, files: 4},

    fileFilter: function (req, file, cb) 
    {
        console.log("foi")
        const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
        if (!allowedTypes.includes(file.mimetype))
        {
            return cb(new Error("Apenas arquivos .jpg, .jpeg e .png são suportados"));
        }
        cb (null, true);
    }

});

export default uploadPicture;