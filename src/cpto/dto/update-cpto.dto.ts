import { PartialType } from '@nestjs/swagger';
import { CreateCptoDto } from './create-cpto.dto';

export class UpdateCptoDto extends PartialType(CreateCptoDto) {}
