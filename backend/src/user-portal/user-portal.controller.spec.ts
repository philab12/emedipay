import { Test, TestingModule } from '@nestjs/testing';
import { UserPortalController } from './user-portal.controller';
import { UserPortalService } from './user-portal.service';

describe('UserPortalController', () => {
  let controller: UserPortalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPortalController],
      providers: [UserPortalService],
    }).compile();

    controller = module.get<UserPortalController>(UserPortalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
