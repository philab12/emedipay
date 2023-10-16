import { Module } from '@nestjs/common';
import { HealthCareService } from './health_care.service';
import { HealthCareController } from './health_care.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthCare } from './entities/health_care.entity';

@Module({
  imports:[TypeOrmModule.forFeature([HealthCare])],
  controllers: [HealthCareController],
  providers: [HealthCareService],
})
export class HealthCareModule {}
