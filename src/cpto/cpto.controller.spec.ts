import { Test, TestingModule } from '@nestjs/testing';
import { CptoController } from './cpto.controller';
import { CptoService } from './cpto.service';

describe('CptoController', () => {
  let controller: CptoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CptoController],
      providers: [CptoService],
    }).compile();

    controller = module.get<CptoController>(CptoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
