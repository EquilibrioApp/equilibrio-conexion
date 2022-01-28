import { Test, TestingModule } from '@nestjs/testing';
import { EAvanceService } from './e-avance.service';

describe('EAvanceService', () => {
  let service: EAvanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EAvanceService],
    }).compile();

    service = module.get<EAvanceService>(EAvanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
