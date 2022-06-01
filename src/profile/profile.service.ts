import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { 
  UpdateProfileDTO, 
  UpdatePasswordDTO 
} from './dto';

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

  async updateAvatar(
    userId: number,
    file: Express.Multer.File,
  ) {
    return {
      userId,
      file
    };
  }

  async updatePassword(
    userId: number,
    dto: UpdatePasswordDTO,
  ) {
    return dto;
  }
}
