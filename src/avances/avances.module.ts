import { Module } from '@nestjs/common';
import { AvancesService } from './avances.service';
import { AvancesController } from './avances.controller';

@Module({
  providers: [AvancesService],
  controllers: [AvancesController]
})
export class AvancesModule {}
