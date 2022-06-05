import {
  IsNotEmpty,
} from 'class-validator';

export class ParamsUserDTO {
  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  perPage: number;
}
