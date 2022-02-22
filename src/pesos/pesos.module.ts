import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PesoEntity } from './peso.entity';
import { PesosController } from './pesos.controller';
import { PesosService } from './pesos.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([PesoEntity]),
  ],
  exports: [PesosService],
  providers: [PesosService],
  controllers: [PesosController]
})
export class PesosModule {}
