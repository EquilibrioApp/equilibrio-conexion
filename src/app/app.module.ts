import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoginController } from '../login/login.controller';
import { DoctorModule } from '../doctor/doctor.module';
import { PatientModule } from 'src/patient/patient.module';
import { EMetaModule } from 'src/e-meta/e-meta.module';

@Module({
  //Rutas de la application
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({ 
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(<string>process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 5,
      //dropSchema: true
    }),
    DoctorModule, PatientModule, EMetaModule
  ],
  controllers: [LoginController]
})
export class AppModule {}
