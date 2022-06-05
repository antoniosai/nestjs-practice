import {
  IsNotEmpty,
} from 'class-validator';

export class ParamsCategoryDTO {
  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  perPage: number;
}
