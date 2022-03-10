import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';


import { UserEntity } from './users.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DoctorEntity } from '../doctor/doctor.entity';
import { PatientEntity } from '../patient/patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, DoctorEntity, PatientEntity]), HttpModule],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
