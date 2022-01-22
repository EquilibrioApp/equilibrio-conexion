import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientController } from './controllers/patient.controller';
import { PatientEntity } from './models/patient.entity';
import { PatientService } from './services/patient.service';

@Module({
  imports: [TypeOrmModule.forFeature([PatientEntity])], //Arreglo de entidades
  providers: [PatientService],
  controllers: [PatientController],
})
export class PatientModule {}
