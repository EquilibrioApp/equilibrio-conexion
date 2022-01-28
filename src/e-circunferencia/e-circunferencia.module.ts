import { Module } from '@nestjs/common';
import { ECircunferenciaService } from './services/e-circunferencia.service';
import { ECircunferenciaController } from './controllers/e-circunferencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CircunferenciaPostEntity } from './models/circunferencia.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([CircunferenciaPostEntity])
  ],
  providers: [ECircunferenciaService],
  controllers: [ECircunferenciaController]
})
export class ECircunferenciaModule {}
