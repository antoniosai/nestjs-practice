import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { CategoryService } from './category.service';
import {
  CreateCategoryDTO,
  UpdateCategoryDTO,
  ParamsCategoryDTO,
} from './dto';
@Controller({ path: 'categories', version: '1' })
export class CategoryController {
  constructor(
    private categoryService: CategoryService,
  ) {}

  @MessagePattern('createCategory')
  @Post()
  create(@Payload() dto: CreateCategoryDTO) {
    return this.categoryService.create(dto);
  }

  @MessagePattern('findAllCategories')
  @Get()
  findAll(@Query() params: ParamsCategoryDTO) {
    return this.categoryService.findAll(params);
  }

  @MessagePattern('findOneCategory')
  @Get('/:id')
  findOne(@Param() param: { id: number }) {
    const { id } = param;
    return this.categoryService.findOne(id);
  }

  @MessagePattern('updateCategory')
  @Patch('/:id')
  update(
    @Param() param: { id: number },
    @Payload() dto: UpdateCategoryDTO,
  ) {
    return this.categoryService.update(
      param.id,
      dto,
    );
  }

  @MessagePattern('removeCategory')
  remove(@Param() param: { id: number }) {
    return this.categoryService.remove(param.id);
  }
}
