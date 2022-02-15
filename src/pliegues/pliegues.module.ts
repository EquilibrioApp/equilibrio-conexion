import { Module } from '@nestjs/common';
import { PlieguesService } from './pliegues.service';
import { PlieguesController } from './pliegues.controller';

@Module({
  providers: [PlieguesService],
  controllers: [PlieguesController]
})
export class PlieguesModule {}
