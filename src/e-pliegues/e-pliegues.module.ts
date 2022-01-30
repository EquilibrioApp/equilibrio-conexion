import { Module } from '@nestjs/common';
import { EPlieguesService } from './services/e-pliegues.service';
import { EPlieguesController } from './controllers/e-pliegues.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlieguesPostEntity } from './models/pliegues.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([PlieguesPostEntity]),
  ],
  providers: [EPlieguesService],
  controllers: [EPlieguesController]
})
export class EPlieguesModule {}
