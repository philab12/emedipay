import { Test, TestingModule } from '@nestjs/testing';
import { HealthCareController } from './health_care.controller';
import { HealthCareService } from './health_care.service';

describe('HealthCareController', () => {
  let controller: HealthCareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthCareController],
      providers: [HealthCareService],
    }).compile();

    controller = module.get<HealthCareController>(HealthCareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
