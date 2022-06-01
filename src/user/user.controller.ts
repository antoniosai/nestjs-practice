import {
  Controller,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
  @UseGuards(JwtGuard)

  @Get('me')
  profile(@Req() req: Request) {
		const { user } = req;
    
		return user;
  }
}
