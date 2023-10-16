import { PartialType } from '@nestjs/mapped-types';
import { CreateHealthProfessionDto } from './create-health-profession.dto';

export class UpdateHealthProfessionDto extends PartialType(CreateHealthProfessionDto) {}
