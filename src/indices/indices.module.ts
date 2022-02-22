import { Module } from '@nestjs/common';
import { IndicesService } from './indices.service';
import { IndicesController } from './indices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndiceEntity } from './indice.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([IndiceEntity]),
  ],
  exports: [IndicesService],
  providers: [IndicesService],
  controllers: [IndicesController]
})
export class IndicesModule {}
