import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ECircunferenciasController } from './controllers/e-circunferencias.controller';
import { CircunferenciasPostEntity } from './models/circunferencias.entity';
import { ECircunferenciasService } from './services/e-circunferencias.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([CircunferenciasPostEntity])
  ],
  controllers: [ECircunferenciasController],
  providers: [ECircunferenciasService]
})
export class ECircunferenciasModule {}
