import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IndicesDto, IndicesResponseDto } from '../dto/indices.dto';
import { IndicesPostEntity } from '../models/indices.entity';

@Injectable()
export class EIndicesService {
    constructor(
    @InjectRepository(IndicesPostEntity) 
    private readonly indicesRepo: Repository<IndicesPostEntity>
    ){}

    createIndices( indices : IndicesDto): Promise<IndicesResponseDto>{
        const newIndices = this.indicesRepo.create(indices);
        console.log(newIndices);
        return this.indicesRepo.save(newIndices);
    }
}
