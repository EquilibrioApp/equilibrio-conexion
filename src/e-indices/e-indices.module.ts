import { Module } from '@nestjs/common';
import { EIndicesService } from './services/e-indices.service';
import { EIndicesController } from './controllers/e-indices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndicesPostEntity } from './models/indices.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([IndicesPostEntity]),
  ],
  providers: [EIndicesService],
  controllers: [EIndicesController]
})
export class EIndicesModule {}
