import { Test, TestingModule } from '@nestjs/testing';
import { EquivalenciaService } from './equivalencia.service';

describe('EquivalenciaService', () => {
  let service: EquivalenciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquivalenciaService],
    }).compile();

    service = module.get<EquivalenciaService>(EquivalenciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
