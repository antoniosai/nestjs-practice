import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class ForgetPasswordDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
