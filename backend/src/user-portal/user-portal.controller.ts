import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UserPortalService } from './user-portal.service';
import { CreateUserPortalDto } from './dto/create-user-portal.dto';
import { UpdateUserPortalDto } from './dto/update-user-portal.dto';

@Controller('user-portal')
@UseInterceptors(ClassSerializerInterceptor)
export class UserPortalController {
  constructor(private readonly userPortalService: UserPortalService) {}

  @Post()
  create(@Body() createUserPortalDto: CreateUserPortalDto) {
    return this.userPortalService.create(createUserPortalDto);
  }

  @Get()
  findAll() {
    return this.userPortalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userPortalService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createUserPortalDto: CreateUserPortalDto) {
    return this.userPortalService.update(id, createUserPortalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userPortalService.remove(id);
  }
}
