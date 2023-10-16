import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthProfessionsService } from './health-professions.service';
import { CreateHealthProfessionDto } from './dto/create-health-profession.dto';

@Controller('health-professions')
export class HealthProfessionsController {
  constructor(private readonly healthProfessionsService: HealthProfessionsService) {}

  @Post()
  create(@Body() createHealthProfessionDto: CreateHealthProfessionDto) {
    return this.healthProfessionsService.create(createHealthProfessionDto);
  }

  @Get()
  findAll() {
    return this.healthProfessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthProfessionsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createHealthProfessionDto: CreateHealthProfessionDto) {
    return this.healthProfessionsService.update(id, createHealthProfessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthProfessionsService.remove(id);
  }
}
