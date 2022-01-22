import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';
import { PatientDto } from '../dto/patient.dto';
import { PatientEntity } from '../models/patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(PatientEntity)
    private readonly patientRepository: Repository<PatientEntity>
  ) {}

  createPatient(patient: PatientDto): Promise<PatientDto> {
    const password = encodePassword(patient.password);
    console.log(password);
    const newPatient = this.patientRepository.create({
      ...patient,
      password,
    });
    console.log(newPatient);
    return this.patientRepository.save(newPatient);
  }

  getPatientByDoctorsId(nutri_codigo: string): Promise<PatientDto[]>{
    return this.patientRepository.find({nutri_codigo});
  }
}
