import { Test, TestingModule } from '@nestjs/testing';
import { EAvanceController } from './e-avance.controller';

describe('EAvanceController', () => {
  let controller: EAvanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EAvanceController],
    }).compile();

    controller = module.get<EAvanceController>(EAvanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
