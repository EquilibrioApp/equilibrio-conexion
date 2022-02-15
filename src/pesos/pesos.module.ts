import { Module } from '@nestjs/common';
import { PesosController } from './pesos.controller';

@Module({
  controllers: [PesosController]
})
export class PesosModule {}
