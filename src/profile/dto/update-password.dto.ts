import {
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Match } from '../decorator/match.decorator';

export class UpdatePasswordDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Match('password', {message: "Password doesn't same"})
  passwordConfirm: string;
}
