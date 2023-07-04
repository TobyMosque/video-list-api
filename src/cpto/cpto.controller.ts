import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CptoService } from './cpto.service';
import { CreateCptoDto } from './dto/create-cpto.dto';
import { UpdateCptoDto } from './dto/update-cpto.dto';

@Controller('cpto')
export class CptoController {
  constructor(private readonly cptoService: CptoService) {}

  @Post()
  create(@Body() createCptoDto: CreateCptoDto) {
    return this.cptoService.create(createCptoDto);
  }

  @Get()
  findAll() {
    return this.cptoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cptoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCptoDto: UpdateCptoDto) {
    return this.cptoService.update(+id, updateCptoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cptoService.remove(+id);
  }
}
