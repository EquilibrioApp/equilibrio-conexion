import { Module } from '@nestjs/common';
import { IndicesService } from './src/indices/indices.service';
import { IndicesController } from './src/indices/indices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndiceEntity } from './src/indices/indice.entity';
import { PesoEntity } from 'src/pesos/peso.entity';
import { CircunferenciaEntity } from 'src/circunferencias/circunferencia.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([IndiceEntity,PesoEntity, CircunferenciaEntity]),
  ],
  exports: [IndicesService],
  providers: [IndicesService],
  controllers: [IndicesController]
})
export class IndicesModule {}
