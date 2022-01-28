import { Module } from '@nestjs/common';
import { EAvanceService } from './services/e-avance.service';
import { EAvanceController } from './controllers/e-avance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvancePostEntity } from './models/avance.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([AvancePostEntity])
  ],
  providers: [EAvanceService],
  controllers: [EAvanceController]
})
export class EAvanceModule {}
