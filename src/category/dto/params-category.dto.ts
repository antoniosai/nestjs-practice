import {
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class ParamsCategoryDTO {
  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  perPage: number;

  @IsOptional()
  searchTerm: string;
}
