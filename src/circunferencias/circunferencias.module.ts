import { Module } from '@nestjs/common';
import { CircunferenciasService } from './circunferencias.service';
import { CircunferenciasController } from './circunferencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CircunferenciaEntity } from './circunferencia.entity';
import { AvancesModule } from 'src/avances/avances.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([CircunferenciaEntity]),
  ],
  exports: [CircunferenciasService],
  providers: [CircunferenciasService],
  controllers: [CircunferenciasController]
})
export class CircunferenciasModule {}
