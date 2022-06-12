import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { AdminGuard } from 'src/auth/guard';
import {
  UpdatePasswordDTO,
  UpdateProfileDTO,
} from './dto';
import { ProfileService } from './profile.service';

@Controller('profile')
@UseGuards(AdminGuard)
export class ProfileController {
  constructor(
    private profileService: ProfileService,
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
    return this.profileService.editUser(
      userId,
      dto,
    );
  }

  @Post('avatar')
  @UseInterceptors(FileInterceptor('avatar'))
  updateAvatar(
    @GetUser('id') userId: number,
    @UploadedFile() avatar: Express.Multer.File,
  ) {
    return this.profileService.updateAvatar(
      userId,
      avatar,
    );
  }

  @Patch('password')
  @UseInterceptors(FileInterceptor('avatar'))
  updatePassword(
    @GetUser('id') userId: number,
    @Body() dto: UpdatePasswordDTO,
  ) {
    return this.profileService.updatePassword(
      userId,
      dto,
    );
  }
}
