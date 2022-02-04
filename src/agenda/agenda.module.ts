import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendaController } from './controllers/agenda.controller';
import { AgendaPostEntity } from './models/agenda.entity';
import { AgendaService } from './services/agenda.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AgendaPostEntity])],
  controllers: [AgendaController],
  providers: [AgendaService]
})
export class AgendaModule {}
