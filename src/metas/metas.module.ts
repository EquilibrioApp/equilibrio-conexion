import { Module } from '@nestjs/common';
import { MetasController } from './metas.controller';

@Module({
  controllers: [MetasController]
})
export class MetasModule {}
