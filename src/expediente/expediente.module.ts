import { Module } from '@nestjs/common';
import { ExpedienteService } from './services/expediente.service';
import { ExpedienteController } from './controllers/expediente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpedientePostEntity } from './models/expediente.entity';
import { MetaPostEntity } from './models/meta.entity';
import { AvancePostEntity } from './models/avances.entity';
import { CircunferenciasPostEntity } from './models/circunferencias.entity';
import { PesoPostEntity } from './models/peso.entity';
import { PlieguesPostEntity } from './models/pliegues.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ExpedientePostEntity, MetaPostEntity, AvancePostEntity, 
                            CircunferenciasPostEntity, PesoPostEntity, PlieguesPostEntity]),
  ],
  providers: [ExpedienteService],
  controllers: [ExpedienteController]
})
export class ExpedienteModule {}
