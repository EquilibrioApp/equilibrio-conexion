import { Test, TestingModule } from '@nestjs/testing';
import { EIndicesService } from './e-indices.service';

describe('EIndicesService', () => {
  let service: EIndicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EIndicesService],
    }).compile();

    service = module.get<EIndicesService>(EIndicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
