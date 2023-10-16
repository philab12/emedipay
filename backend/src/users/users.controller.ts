import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSupportDto } from 'src/common/dtos/user.support.dto';
import { UserProviderDto } from 'src/common/dtos/user.provider.dto';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }


  @Post("user_support")
  createUserSupport(@Body() userSupportDto: UserSupportDto) {
    return this.usersService.create_support_user_portal(userSupportDto)
  }


  @Post("user_provider")
  createUserProvider(@Body() userProviderDto: UserProviderDto) {
    return this.usersService.create_provider_user_portal(userProviderDto)
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get('email/:email')
  async findUserByEmail(@Param("email") email: string) {
    return this.usersService.findUserByEmail(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
    return this.usersService.update(id, createUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
