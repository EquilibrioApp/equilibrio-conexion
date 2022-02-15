import { Module } from '@nestjs/common';
import { CircunferenciasService } from './circunferencias.service';
import { CircunferenciasController } from './circunferencias.controller';

@Module({
  providers: [CircunferenciasService],
  controllers: [CircunferenciasController]
})
export class CircunferenciasModule {}
