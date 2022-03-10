import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DoctorEntity } from './doctor.entity';
import { PatientsResponseDto } from './dto/doctor.dto';
import { PatientService } from '../patient/patient.service';

@Injectable()
export class DoctorService {
    constructor(
    //Repositorios
    @InjectRepository(DoctorEntity)
    private readonly doctorRepository: Repository<DoctorEntity>,
  ){}

  async findPatients(id: string): Promise<PatientsResponseDto> {
    return
  }
}
