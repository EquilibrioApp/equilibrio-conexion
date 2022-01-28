import { Module } from '@nestjs/common';
import { ExpedienteService } from './services/expediente.service';
import { ExpedienteController } from './controllers/expediente.controller';

@Module({
  providers: [ExpedienteService],
  controllers: [ExpedienteController]
})
export class ExpedienteModule {}
