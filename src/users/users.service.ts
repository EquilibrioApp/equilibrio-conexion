import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';

import { UsersDto, UserResponseDto } from './dto/users.dto';
import { UserEntity } from './users.entity';
import { encodePassword } from '../utils/bcrypt';
import { DoctorEntity } from '../doctor/doctor.entity';
import { PatientEntity } from '../patient/patient.entity';

@Injectable()
export class UsersService {

    constructor(
      @InjectRepository(UserEntity)//Repositorio original del servicio
      private readonly userRepository: Repository<UserEntity>,
      @InjectRepository(DoctorEntity)//Inyectas el repositorio que necesites y al cual le vas a pasar el id
      private readonly doctorRepository: Repository<DoctorEntity>,
      @InjectRepository(PatientEntity)//Inyectas el repositorio que necesites y al cual le vas a pasar el id
      private readonly patientRepository: Repository<PatientEntity>,
      private httpService: HttpService,
    ){}

    //Creación del usuario
    async create(user: UsersDto): Promise<UserResponseDto> {
      const emailExists = await this.findByEmail(user.email)

      if(emailExists === undefined){
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
  
        //TODO No regresar la contrasena al crear usuarios
        //const { password, ...response } = user;
  
        return response;
      }

      //En caso de que el email ya esxista
      throw new BadRequestException('Email en uso');
    }

    async findByEmail(email: string): Promise<UsersDto | null>{
        return this.userRepository.findOne({where:{email}});
    }

    async findById(id: string): Promise<UsersDto>{
        return this.userRepository.findOne(id);
    }
}
