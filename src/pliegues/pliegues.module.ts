import { Module } from '@nestjs/common';
import { PlieguesService } from './pliegues.service';
import { PlieguesController } from './pliegues.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlieguesEntity } from './pliegues.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([PlieguesEntity]),
  ],
  exports: [PlieguesService],
  providers: [PlieguesService],
  controllers: [PlieguesController],
})
export class PlieguesModule {}
