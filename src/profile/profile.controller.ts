import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { JwtGuard } from 'src/auth/guard';
import { UpdateProfileDTO } from './dto';
import { ProfileService } from './profile.service';

@Controller('profile')
@UseGuards(JwtGuard)
export class ProfileController {
  constructor(
    private ProfileService: ProfileService,
  ) {}

  @Get()
  profile(@Req() req: Request) {
    const { user } = req;

    return user;
  }

  @Patch()
  editUser(
    @GetUser('id') userId: number,
    @Body() dto: UpdateProfileDTO,
  ) {
    return this.ProfileService.editUser(
      userId,
      dto,
    );
  }
}
