import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvancesController } from 'src/avances/avances.controller';
import { AvanceEntity } from 'src/avances/avances.entity';
import { AvancesService } from 'src/avances/avances.service';
import { CircunferenciasController } from 'src/circunferencias/circunferencias.controller';
import { CircunferenciasEntity } from 'src/circunferencias/circunferencias.entity';
import { CircunferenciasService } from 'src/circunferencias/circunferencias.service';
import { IndiceEntity } from 'src/indices/indice.entity';
import { IndicesController } from 'src/indices/indices.controller';
import { IndicesService } from 'src/indices/indices.service';
import { MetaEntity } from 'src/metas/meta.entity';
import { MetasController } from 'src/metas/metas.controller';
import { MetasService } from 'src/metas/metas.service';
import { PesoEntity } from 'src/pesos/peso.entity';
import { PesosController } from 'src/pesos/pesos.controller';
import { PesosService } from 'src/pesos/pesos.service';
import { PlieguesController } from 'src/pliegues/pliegues.controller';
import { PlieguesEntity } from 'src/pliegues/pliegues.entity';
import { PlieguesService } from 'src/pliegues/pliegues.service';
import { ExpedienteController } from './expediente.controller';
import { ExpedienteEntity } from './expediente.entity';
import { ExpedienteService } from './expediente.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([ExpedienteEntity, MetaEntity, AvanceEntity, 
                            CircunferenciasEntity, PesoEntity, PlieguesEntity,
                            IndiceEntity]),
  ],
  providers: [ExpedienteService, MetasService, AvancesService,
              CircunferenciasService,  PesosService, PlieguesService,
              IndicesService],
  controllers: [ExpedienteController, MetasController, AvancesController, 
                CircunferenciasController, PesosController, PlieguesController,
                IndicesController]
})
export class ExpedienteModule {}
