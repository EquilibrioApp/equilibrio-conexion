import { Module } from '@nestjs/common';
import { EMetaService } from './services/e-meta.service';
import { EMetaController } from './controllers/e-meta.controller';
import { MetaPostEntity } from './models/meta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientService } from 'src/patient/services/patient.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([MetaPostEntity]),
  ],
  providers: [EMetaService],
  controllers: [EMetaController]
})
export class EMetaModule {}
