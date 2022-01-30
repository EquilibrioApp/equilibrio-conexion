import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PlieguesDto, PlieguesResponseDto } from '../dto/pliegues.dto';
import { PlieguesPostEntity } from '../models/pliegues.entity';

@Injectable()
export class EPlieguesService {
    constructor(
    @InjectRepository(PlieguesPostEntity) 
    private readonly plieguesRepo: Repository<PlieguesPostEntity>
    ){}

    createPliegues( pliegues : PlieguesDto): Promise<PlieguesResponseDto>{
        const newPliegues = this.plieguesRepo.create(pliegues);
        console.log(newPliegues);
        return this.plieguesRepo.save(newPliegues);
    }
}
