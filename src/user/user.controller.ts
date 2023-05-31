import { CreateUserDto } from './dtos/createUser.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post()
  async createUsers(@Body() createUser: CreateUserDto) {
    return createUser;
  }
}
