import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvanceEntity } from 'src/avances/avances.entity';
import { CircunferenciasEntity } from 'src/circunferencias/circunferencias.entity';
import { MetaEntity } from 'src/metas/meta.entity';
import { PesoEntity } from 'src/pesos/peso.entity';
import { PlieguesEntity } from 'src/pliegues/pliegues.entity';
import { ExpedienteController } from './expediente.controller';
import { ExpedienteEntity } from './expediente.entity';
import { ExpedienteService } from './expediente.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([ExpedienteEntity, MetaEntity, AvanceEntity, 
                            CircunferenciasEntity, PesoEntity, PlieguesEntity]),
  ],
  providers: [ExpedienteService],
  controllers: [ExpedienteController]
})
export class ExpedienteModule {}
