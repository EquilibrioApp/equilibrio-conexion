import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendaController } from './agenda.controller';
import { AgendaEntity } from './agenda.entity';
import { AgendaService } from './agenda.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AgendaEntity])],
  controllers: [AgendaController],
  providers: [AgendaService]
})
export class AgendaModule {}
