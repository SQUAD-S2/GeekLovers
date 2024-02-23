import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';

const prisma = new PrismaClient();

export async function productSeed() {
  // criar 100 entradas no banco de dados
  // adiciona os produtos criados a lista de produtos postados por um usuário
  // adiciona os produtos com  id par a lista de favoritos
  // cada produto tem um comentário e cada comentário tem uma resposta
  for (let i = 0; i < 100; i++) {
    await prisma.product.create({
      data: {
        id: i + 1,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        quantity: faker.number.int({ min: 1, max: 100 }),
        state: 'NEW',
        description: faker.commerce.productDescription(),
        photos: [faker.image.url(), faker.image.url()],
        userId: i + 1, // conectando u user dessa forma, estamos atrelando um produto para cada usuário criado em userSeed
        favorites: i % 2 === 0 ? { connect: { userId: i + 1 } } : undefined,
        comments: {
          create: {
            id: i+1,
            text: faker.lorem.sentence(),
            userId: i+1,
            answer: {
              create: {
                text: faker.lorem.sentence(),
                userId: i+1,
              },
            },
          },
        },
      },
    });
  }
}
