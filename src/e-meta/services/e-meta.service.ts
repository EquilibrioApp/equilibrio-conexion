import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MetaDto, MetaResponseDto } from '../dto/meta.dto';
import { MetaPostEntity } from '../models/meta.entity';

@Injectable()
export class EMetaService {
    constructor(@InjectRepository(MetaPostEntity) 
    private readonly metaRepo: Repository<MetaPostEntity>
    ){}

    createMeta( meta : MetaDto): Promise<MetaResponseDto>{
        const newMeta = this.metaRepo.create(meta);
        console.log(newMeta);
        return this.metaRepo.save(newMeta);
    }

}
