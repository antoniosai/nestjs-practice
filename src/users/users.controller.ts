import {
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { UsersService } from './users.service';
import {
  CreateUserDTO,
  UpdateUserDTO,
  ParamsUserDTO,
} from './dto';

@Controller({ path: 'users', version: '1' })
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) {}

  @MessagePattern('createUser')
  @Post()
  create(@Payload() dto: CreateUserDTO) {
    return this.usersService.create(dto);
  }

  @MessagePattern('findAllUsers')
  @Get()
  findAll(@Query() params: ParamsUserDTO) {
    return this.usersService.findAll(params);
  }

  @MessagePattern('findOneUser')
  @Get('/:id')
  findOne(@Param() param: any) {
    const { id } = param;
    return this.usersService.findOne(id);
  }

  @MessagePattern('updateUser')
  update(@Payload() dto: UpdateUserDTO) {
    return this.usersService.update(dto.id, dto);
  }

  @MessagePattern('removeUser')
  remove(@Payload() id: number) {
    return this.usersService.remove(id);
  }
}
