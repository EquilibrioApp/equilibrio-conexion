import { Test, TestingModule } from '@nestjs/testing';
import { EPesoService } from './e-peso.service';

describe('EPesoService', () => {
  let service: EPesoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EPesoService],
    }).compile();

    service = module.get<EPesoService>(EPesoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
