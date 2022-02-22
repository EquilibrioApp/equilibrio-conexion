import { Module } from '@nestjs/common';
import { AvancesService } from './avances.service';
import { AvancesController } from './avances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvanceEntity } from './avances.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([AvanceEntity]),
  ],
  exports: [AvancesService],
  providers: [AvancesService],
  controllers: [AvancesController]
})
export class AvancesModule {}
