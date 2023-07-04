import { Test, TestingModule } from '@nestjs/testing';
import { CptoService } from './cpto.service';

describe('CptoService', () => {
  let service: CptoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CptoService],
    }).compile();

    service = module.get<CptoService>(CptoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
