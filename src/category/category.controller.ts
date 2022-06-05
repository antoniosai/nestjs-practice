import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CategoryService } from './category.service';
import { CreateCategoryDTO, UpdateCategoryDTO, ParamsCategoryDTO } from './dto';
@Controller({ path: 'categories', version: '1'})
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @MessagePattern('createUser')
  @Post()
  create(@Payload() dto: CreateCategoryDTO) {
    return this.categoryService.create(dto);
  }

  @MessagePattern('findAllUsers')
  @Get()
  findAll(@Query() params: ParamsCategoryDTO) {
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
