import { Module } from '@nestjs/common';
import { EPesoService } from './services/e-peso.service';
import { EPesoController } from './controllers/e-peso.controller';
import { PesoPostEntity } from './models/peso.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([PesoPostEntity])
  ],
  providers: [EPesoService],
  controllers: [EPesoController]
})
export class EPesoModule {}
