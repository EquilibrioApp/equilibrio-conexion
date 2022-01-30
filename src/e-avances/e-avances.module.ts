import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EAvancesController } from './controllers/e-avances.controller';
import { AvancePostEntity } from './models/avances.entity';
import { EAvancesService } from './services/e-avances.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([AvancePostEntity])
  ],
  controllers: [EAvancesController],
  providers: [EAvancesService]
})
export class EAvancesModule {}
