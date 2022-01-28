import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EPlieguesService } from './services/e-pliegues.service';
import { EPlieguesController } from './controllers/e-pliegues.controller';
import { PlieguesPostEntity } from './models/pliegues.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([PlieguesPostEntity])
  ],
  providers: [EPlieguesService],
  controllers: [EPlieguesController]
})
export class EPlieguesModule {}
