import { PrismaClient } from '@prisma/client';
import { userSeed } from './models/userSeed';
import { productSeed } from './models/productSeed';
import { productsOnCartSeed } from './models/productsOnCartSeed';

const prisma = new PrismaClient();

async function main() {
  // deletar qualquer entrada existente no bando de dados
  await prisma.productsOnCart.deleteMany();
  await prisma.answer.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.product.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.favorites.deleteMany();
  await prisma.user.deleteMany();

  // popular o banco de dados
  await userSeed();
  await productSeed();
  await productsOnCartSeed();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
