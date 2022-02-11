import { Test, TestingModule } from '@nestjs/testing';
import { EquivalenciaController } from './equivalencia.controller';

describe('EquivalenciaController', () => {
  let controller: EquivalenciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquivalenciaController],
    }).compile();

    controller = module.get<EquivalenciaController>(EquivalenciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
