import { Module } from '@nestjs/common';
import { CptoService } from './cpto.service';
import { CptoController } from './cpto.controller';

@Module({
  controllers: [CptoController],
  providers: [CptoService]
})
export class CptoModule {}
