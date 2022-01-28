import { Test, TestingModule } from '@nestjs/testing';
import { ECircunferenciaService } from './e-circunferencia.service';

describe('ECircunferenciaService', () => {
  let service: ECircunferenciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ECircunferenciaService],
    }).compile();

    service = module.get<ECircunferenciaService>(ECircunferenciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
