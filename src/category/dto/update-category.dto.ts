import { PartialType } from '@nestjs/mapped-types';
import {
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  isNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateCategoryDTO } from './create-category.dto';

export class UpdateCategoryDTO {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsOptional()
  deskripsi: string;
}
