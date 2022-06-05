import { PartialType } from '@nestjs/mapped-types';
import { isNotEmpty, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString } from 'class-validator';
import { CreateCategoryDTO } from './create-category.dto';

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {

  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsOptional()
  deskripsi: string;
}
