import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoginController } from '../login/login.controller';
import { DoctorModule } from '../doctor/doctor.module';
import { PatientModule } from 'src/patient/patient.module';
import { AgendaModule } from 'src/agenda/agenda.module';
import { ExpedienteModule } from 'src/expediente/expediente.module';
import { CircunferenciasModule } from 'src/circunferencias/circunferencias.module';
import { AvancesModule } from 'src/avances/avances.module';
import { EquivalenciaModule } from 'src/equivalencia/equivalencia.module';
import { IndicesModule } from 'src/indices/indices.module';
import { MetasModule } from 'src/metas/metas.module';
import { PesosModule } from 'src/pesos/pesos.module';
import { PlieguesModule } from 'src/pliegues/pliegues.module';

@Module({
  //Rutas de la application
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({ 
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(<string>process.env.DB_PORT)||5433,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 5,
      //dropSchema: true
    }),
    DoctorModule, PatientModule, AgendaModule, ExpedienteModule,
  ],
  controllers: [LoginController]
})
export class AppModule {}