import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';

@Injectable()
export class CategoryService {

  constructor(
    private prisma: PrismaService,
  ) {}

  create(dto: CreateCategoryDTO) {
    return 'This action adds a new user';
  }

  async findAll(params: { page: number, perPage: number, searchTerm?: string }) {
    try {
      const { page, perPage } = params;
      const users = await this.prisma.user.findMany({
        select: {
          id: true,
          nama: true,
          email: true,
          createdAt: true,
          updatedAt: true,
          roleId: true,
          role: true,
          hash: false,
        },
        // skip: Number(1),
        take: Number(perPage),
        cursor: {
          id: 4,
        },
        
      });
      // delete user.hash;
      return {
        current_page: Number(page),
        per_page: Number(perPage),
        data: users,
      };
    } catch(error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          role: true,
        },
      });
      delete user.hash;
      return user;
    } catch(error) {
      throw error;
    }
  }

  update(id: number, UpdateUserDTO: UpdateCategoryDTO) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
