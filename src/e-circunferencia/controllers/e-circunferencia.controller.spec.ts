import { Test, TestingModule } from '@nestjs/testing';
import { ECircunferenciaController } from './e-circunferencia.controller';

describe('ECircunferenciaController', () => {
  let controller: ECircunferenciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ECircunferenciaController],
    }).compile();

    controller = module.get<ECircunferenciaController>(ECircunferenciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
