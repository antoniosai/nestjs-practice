import { PrismaClient } from '@prisma/client';
import {
  roles,
  users,
  categories,
  satuan,
} from './seeds';

const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({ data: roles });
  await prisma.user.createMany({ data: users });
  await prisma.kategori.createMany({
    data: categories,
  });
  await prisma.satuan.createMany({
    data: satuan,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
