import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileDTO } from './dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async editUser(
    userId: number,
    dto: UpdateProfileDTO,
  ) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
      },
    });

    delete user.hash;

    return user;
  }
}
