import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaEntity } from './meta.entity';
import { MetasController } from './metas.controller';
import { MetasService } from './metas.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([MetaEntity]),
  ],
  exports: [MetasService],
  providers: [MetasService],
  controllers: [MetasController]
})
export class MetasModule {}
