import { Test, TestingModule } from '@nestjs/testing';
import { EPesoController } from './e-peso.controller';

describe('EPesoController', () => {
  let controller: EPesoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EPesoController],
    }).compile();

    controller = module.get<EPesoController>(EPesoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
