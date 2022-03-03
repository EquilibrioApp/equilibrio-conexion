import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { DoctorEntity } from './doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorEntity])],
  providers: [DoctorService],
  controllers: [DoctorController]
})
export class DoctorModule {}
