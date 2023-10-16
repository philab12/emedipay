import { Test, TestingModule } from '@nestjs/testing';
import { UserPortalService } from './user-portal.service';

describe('UserPortalService', () => {
  let service: UserPortalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPortalService],
    }).compile();

    service = module.get<UserPortalService>(UserPortalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
