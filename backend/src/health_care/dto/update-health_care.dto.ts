import { PartialType } from '@nestjs/mapped-types';
import { CreateHealthCareDto } from './create-health_care.dto';

export class UpdateHealthCareDto extends PartialType(CreateHealthCareDto) {}
