import { Test, TestingModule } from '@nestjs/testing';
import { HealthProfessionsService } from './health-professions.service';

describe('HealthProfessionsService', () => {
  let service: HealthProfessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthProfessionsService],
    }).compile();

    service = module.get<HealthProfessionsService>(HealthProfessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
