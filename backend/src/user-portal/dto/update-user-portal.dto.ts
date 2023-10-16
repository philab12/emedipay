import { PartialType } from '@nestjs/mapped-types';
import { CreateUserPortalDto } from './create-user-portal.dto';

export class UpdateUserPortalDto extends PartialType(CreateUserPortalDto) {}
