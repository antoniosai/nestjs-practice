import { Injectable } from '@nestjs/common';
import { Kategori } from '@prisma/client';
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
      const kategori = await this.prisma.kategori.findMany({
        select: {
          id: true,
          nama: true,
          slug: true,
          deskripsi: true,
        },
        
      });
      // delete user.hash;
      return {
        current_page: Number(page),
        per_page: Number(perPage),
        data: kategori,
      };
    } catch(error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<Kategori> {
    try {
      const category = await this.prisma.kategori.findUnique({
        where: {
          id: Number(id),
        },
      });
      return category;
    } catch(error) {
      throw error;
    }
  }

  async update(id: number, dto: UpdateCategoryDTO): Promise<{message: string}> {
    try {

      const user = await this.prisma.kategori.update({
        where: {
          id: Number(id)
        },
        data: dto
      });

      return {
        message: `Berhasil memperbaharui Data Kategori ${user.nama}` 
      };
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number): Promise<{message: string}> {
    try {
      await this.prisma.kategori.delete({
        where: {
          id: Number(id),
        },
      });

      return {
        message: `Berhasil memperbaharui Data Kategori` 
      };
    } catch(error) {
      throw error;
    }
  }
}
