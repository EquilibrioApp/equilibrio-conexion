import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquivalenciaController } from './equivalencia.controller';
import { EquivalenciaEntity } from './equivalencia.entity';
import { EquivalenciaService } from './equivalencia.service';

@Module({
  imports: [TypeOrmModule.forFeature([EquivalenciaEntity])],
  providers: [EquivalenciaService],
  controllers: [EquivalenciaController]
})
export class EquivalenciaModule {}
