import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersDto } from './dto/users.dto';
import { UserEntity } from './users.entity';
import { encodePassword } from '../utils/bcrypt';
import { DoctorEntity } from '../doctor/doctor.entity';
import { PatientEntity } from '../patient/patient.entity';

@Injectable()
export class UsersService {

    constructor(
      @InjectRepository(UserEntity)
      private readonly userRepository: Repository<UserEntity>,
      @InjectRepository(DoctorEntity)
      private readonly doctorRepository: Repository<DoctorEntity>,
      @InjectRepository(PatientEntity)
      private readonly patientRepository: Repository<PatientEntity>,
    ){}

    async create(user: UsersDto): Promise<UsersDto> {
      const password = encodePassword(user.password);
      const newUserA = new UserEntity();
      newUserA.name = user.name;
      newUserA.userType = user.userType;
      newUserA.fathersLastName = user.fathersLastName;
      newUserA.mothersLastName = user.mothersLastName;
      newUserA.email = user.email;
      newUserA.password = password;
      newUserA.sex = user.sex;
      newUserA.birthDate = user.birthDate;
      newUserA.phoneNumber = user.phoneNumber;


      const newUser = await this.userRepository.create(newUserA);
      const response = await this.userRepository.save(newUser);

      if(user.userType === '1'){
        const doctor = new DoctorEntity();
        doctor.cedula = user.cedula;
        doctor.houseNumber = user.houseNumber;
        doctor.streetName = user.streetName;
        doctor.postalCode = user.postalCode;
        doctor.user = response;

        const newDoctor = await this.doctorRepository.create(doctor);
        this.doctorRepository.save(newDoctor);

      }
      else{
        const patient = new PatientEntity();
        patient.nutriCodigo = user.nutriCodigo;
        patient.user = response;
        
        const newPatient = await this.patientRepository.create(patient);
        this.patientRepository.save(newPatient);
      }

      return response;
    }

    async find(email: string): Promise<UsersDto | undefined>{
        return this.userRepository.findOne({where:{email}});
    }
}
