import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthCareService } from './health_care.service';
import { CreateHealthCareDto } from './dto/create-health_care.dto';

@Controller('health-care')
export class HealthCareController {
  constructor(private readonly healthCareService: HealthCareService) {}

  @Post()
  create(@Body() createHealthCareDto: CreateHealthCareDto) {
    return this.healthCareService.create(createHealthCareDto);
  }

  @Get()
  findAll() {
    return this.healthCareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthCareService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createHealthCareDto: CreateHealthCareDto) {
    return this.healthCareService.update(id, createHealthCareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthCareService.remove(id);
  }
}
