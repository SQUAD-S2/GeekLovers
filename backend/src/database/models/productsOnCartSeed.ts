import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function productsOnCartSeed() {
  // criar 100 entradas no banco de dados
  // adiciona produto com id impar ao carrinho de um usuário
  for (let i = 0; i < 100; i += 2) {
    await prisma.productsOnCart.create({
      data: {
        quantity: 1,
        userId: i+1,
        productId: i+1
      },
    });
    await prisma.cart.update({
      where: {userId: i+1},
      data: {quantity: {increment: 1}}
    })
  }
}