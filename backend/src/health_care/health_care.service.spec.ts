import { Test, TestingModule } from '@nestjs/testing';
import { HealthCareService } from './health_care.service';

describe('HealthCareService', () => {
  let service: HealthCareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthCareService],
    }).compile();

    service = module.get<HealthCareService>(HealthCareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
