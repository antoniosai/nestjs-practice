import {
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class ParamsUserDTO {
  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  perPage: number;

  @IsOptional()
  searchTerm: string;
}
