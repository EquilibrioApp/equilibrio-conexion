import { Module } from '@nestjs/common';
import { EquivalenciaController } from './equivalencia.controller';
import { EquivalenciaService } from './equivalencia.service';

@Module({
  providers: [EquivalenciaService],
  controllers: [EquivalenciaController]
})
export class EquivalenciaModule {}
