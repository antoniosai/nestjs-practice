import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto/create-user.dto';
import { UpdateCategoryDTO } from './dto/update-user.dto';

@Controller({ path: 'users', version: '1'})
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @MessagePattern('createUser')
  @Post()
  create(@Payload() dto: CreateCategoryDTO) {
    return this.categoryService.create(dto);
  }

  @MessagePattern('findAllUsers')
  @Get()
  findAll(@Query() params: { page: number, perPage: number, searchTerm?: string }) {
    return this.categoryService.findAll(params);
  }

  @MessagePattern('findOneUser')
  @Get('/:id')
  findOne(@Param() param: any) {
    const { id } = param;
    return this.categoryService.findOne(id);
  }

  @MessagePattern('updateUser')
  update(@Payload() dto: UpdateCategoryDTO) {
    return this.categoryService.update(dto.id, dto);
  }

  @MessagePattern('removeUser')
  remove(@Payload() id: number) {
    return this.categoryService.remove(id);
  }
}
