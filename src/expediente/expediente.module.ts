import { Module } from '@nestjs/common';
import { ExpedienteService } from './services/expediente.service';
import { ExpedienteController } from './controllers/expediente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpedientePostEntity } from './models/expediente.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ExpedientePostEntity]),
  ],
  providers: [ExpedienteService],
  controllers: [ExpedienteController]
})
export class ExpedienteModule {}
