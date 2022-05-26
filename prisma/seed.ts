import { PrismaClient } from "@prisma/client";
import { links } from '../data/links';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'test@prisma.com',
      role: 'ADMIN'
    }
  });

  await prisma.link.createMany({
    data: links
  });
}

main()
  .catch(err => {
    console.log(err)
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })