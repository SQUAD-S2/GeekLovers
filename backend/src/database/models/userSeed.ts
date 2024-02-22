import { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';
import auth from '../../config/auth';

const prisma = new PrismaClient();

interface User {
  cpf: string;
  name: string;
  email: string;
  birthDate: string;
  profilePicture: string;
  status: number;
  card: string;
  address: string;
  phone: string;
  role: string;
  hash: string;
  salt: string;
}

let data: Prisma.UserCreateManyInput[] = [];

export async function userSeed() {
  // criar 100 entradas no banco de dados
  for (let i = 0; i < 100; i++) {
    // criar hash e salt a partir de senha aleatória
    const password = faker.internet.password({
      length: 20,
      memorable: false,
      pattern: /[A-Za-z\@!-_%*]/,
    });
    const { salt, hash } = auth.generatePassword(password);

    // Definir cargo do usuário e estado do produto aleatoriamente
    const randomRole = Math.floor(Math.random() * 2);

    await prisma.user.create({
      data: {
        id: i + 1, // o id foi declarado dessa forma, para que possamos conectar um produto a um usuário mais facilmente
        cpf: faker.string.numeric({ length: 11, allowLeadingZeros: false }),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        birthDate: faker.date.birthdate().toString(),
        status: faker.number.float({ min: 0, max: 5 }),
        card: faker.finance.creditCardNumber(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
        phone: faker.string.numeric({ length: 14, allowLeadingZeros: false }),
        role: randomRole ? 'USER' : 'MODERATOR',
        hash: hash,
        salt: salt,
        profilePicture: faker.image.url(),
        cart: {
          create: {
            quantity: 0,
            total: 0,
          },
        },
        favorites: { create: {} },
      },
    });
  }
}
