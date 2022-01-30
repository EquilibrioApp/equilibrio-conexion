import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EPesoController } from './controllers/e-peso.controller';
import { EPesoService } from './services/e-peso.service';
import { PesoPostEntity } from './models/peso.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([PesoPostEntity]),
  ],
  controllers: [EPesoController],
  providers: [EPesoService]
})
export class EPesoModule {}
