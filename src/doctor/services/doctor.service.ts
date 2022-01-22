import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DoctorPostEntity } from '../models/doctor.entity';
import { encodePassword } from 'src/utils/bcrypt';
import { DoctorDto } from '../dto/doctor.dto';
import { PatientDto } from 'src/patient/dto/patient.dto';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(DoctorPostEntity)
    private readonly doctorPostRespository: Repository<DoctorPostEntity>,
  ) {}

  createDoctor(doctorPost: DoctorDto): Promise<DoctorDto> {
    const password = encodePassword(doctorPost.password);
    console.log(password);
    const newDoctor = this.doctorPostRespository.create({
      ...doctorPost,
      password,
    });
    console.log(newDoctor);
    return this.doctorPostRespository.save(newDoctor);
  }

  findDoctor(doctorId: string): Promise<DoctorDto> {
      return this.doctorPostRespository.findOne(doctorId);
  }
}
