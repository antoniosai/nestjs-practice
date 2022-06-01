import {
  PrismaClient
} from '@prisma/client';
import { roles } from './seeds';
const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({
    data: roles,
  })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
