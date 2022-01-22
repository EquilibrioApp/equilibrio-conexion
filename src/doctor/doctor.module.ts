import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorController } from './controllers/doctor.controller';
import { DoctorPostEntity } from './models/doctor.entity';
import { DoctorService } from './services/doctor.service';
import { PatientDto } from '../patient/dto/patient.dto';
import { PatientService } from 'src/patient/services/patient.service';
//Estaba en la carpeta DoctorModule
@Module({
  imports: [TypeOrmModule.forFeature([DoctorPostEntity])],//Arreglo de entidades
  providers: [DoctorService],
  controllers: [DoctorController],
  exports: [DoctorService]//Exportar módulos para uso de otros 
})
export class DoctorModule {}
