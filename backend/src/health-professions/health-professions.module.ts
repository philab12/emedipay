import { Module } from '@nestjs/common';
import { HealthProfessionsService } from './health-professions.service';
import { HealthProfessionsController } from './health-professions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthProfession } from './entities/health-profession.entity';

@Module({
  imports:[TypeOrmModule.forFeature([HealthProfession])],
  controllers: [HealthProfessionsController],
  providers: [HealthProfessionsService],
})
export class HealthProfessionsModule {}
