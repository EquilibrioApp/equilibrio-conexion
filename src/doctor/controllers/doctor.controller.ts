import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { PatientDto } from 'src/patient/dto/patient.dto';

import { DoctorDto, FindDcotorByIdResponseDto } from '../dto/doctor.dto';
import { DoctorPostEntity } from '../models/doctor.entity';
import { DoctorPost } from '../models/doctor.interface';
import { DoctorService } from '../services/doctor.service';

@Controller('doctor')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  @Post('/create') //Se crea un nuevo especialista
  createDoctor(@Body() doctorPost: DoctorDto): Promise<DoctorPost> {
    console.log(doctorPost);
    return this.doctorService.createDoctor(doctorPost);
  }

  @Get('/:doctorId')
  getDoctorById(@Param('doctorId') doctorId: string): Promise<DoctorDto> {
    return this.doctorService.findDoctor(doctorId);
  }

  /* @Get('/:doctorId/patients') //Se obtienen los pacientes de un especialista
  getPatients(
    @Param('doctorId') doctorId: string
    ): FindPatientsResponseDto[] {
      //Es a manera de arreglo porque se van a obtener todos los pacientes
      return 'Todos los pacientes de un doctor';
    } */

  /* 
  @Get('/:doctorId/patients/:patientId')
  getPatientById(
    @Param('doctorId') doctorId: string,
    @Param('patientId') patientId: string,
  ): FindPatientsResponseDto {
    return 'El paciente de un doctor';
  } */
}
