import { Module } from '@nestjs/common';
import { UserPortalService } from './user-portal.service';
import { UserPortalController } from './user-portal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPortal } from './entities/user-portal.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserPortal])],
  controllers: [UserPortalController],
  providers: [UserPortalService],
})
export class UserPortalModule {}
