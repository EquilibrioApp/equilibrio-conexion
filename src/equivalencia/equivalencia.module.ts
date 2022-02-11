import { Module } from '@nestjs/common';
import { EquivalenciaController } from './controllers/equivalencia.controller';
import { EquivalenciaService } from './services/equivalencia.service';

@Module({
  providers: [EquivalenciaService],
  controllers: [EquivalenciaController]
})
export class EquivalenciaModule {}
