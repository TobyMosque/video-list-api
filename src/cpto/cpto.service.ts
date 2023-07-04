import { Injectable } from '@nestjs/common';
import { CreateCptoDto } from './dto/create-cpto.dto';
import { UpdateCptoDto } from './dto/update-cpto.dto';

@Injectable()
export class CptoService {
  create(createCptoDto: CreateCptoDto) {
    return 'This action adds a new cpto';
  }

  findAll() {
    return `This action returns all cpto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cpto`;
  }

  update(id: number, updateCptoDto: UpdateCptoDto) {
    return `This action updates a #${id} cpto`;
  }

  remove(id: number) {
    return `This action removes a #${id} cpto`;
  }
}
