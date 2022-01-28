import { Test, TestingModule } from '@nestjs/testing';
import { EIndicesController } from './e-indices.controller';

describe('EIndicesController', () => {
  let controller: EIndicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EIndicesController],
    }).compile();

    controller = module.get<EIndicesController>(EIndicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
