import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth/strategy';

@Controller('user')
export class UserController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  profile() {
    return 'user info';
  }
}
