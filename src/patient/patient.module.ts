import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PatientController } from './patient.controller';
import { PatientEntity } from './patient.entity';
import { PatientService } from './patient.service';

@Module({
  imports: [TypeOrmModule.forFeature([PatientEntity])], //Arreglo de entidades
  providers: [PatientService],
  controllers: [PatientController],
  exports : [PatientService],
})
export class PatientModule {}
