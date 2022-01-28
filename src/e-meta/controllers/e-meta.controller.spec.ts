import { Test, TestingModule } from '@nestjs/testing';
import { EMetaController } from './e-meta.controller';

describe('EMetaController', () => {
  let controller: EMetaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EMetaController],
    }).compile();

    controller = module.get<EMetaController>(EMetaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
