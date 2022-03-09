import { Module } from '@nestjs/common';
import { RegistrosService } from './registros.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrosController } from './registros.controller';
import { RegistroEntity } from './registro.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([RegistroEntity]),
  ],
  providers: [RegistrosService],
  controllers: [RegistrosController]
})
export class RegistroModule {}
