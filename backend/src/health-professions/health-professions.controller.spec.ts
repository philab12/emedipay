import { Test, TestingModule } from '@nestjs/testing';
import { HealthProfessionsController } from './health-professions.controller';
import { HealthProfessionsService } from './health-professions.service';

describe('HealthProfessionsController', () => {
  let controller: HealthProfessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthProfessionsController],
      providers: [HealthProfessionsService],
    }).compile();

    controller = module.get<HealthProfessionsController>(HealthProfessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
