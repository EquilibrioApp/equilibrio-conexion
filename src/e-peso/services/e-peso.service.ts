import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PesoDto, PesoResponseDto } from '../dto/peso.dto';
import { PesoPostEntity } from '../models/peso.entity';

@Injectable()
export class EPesoService {
    constructor(
    @InjectRepository(PesoPostEntity) 
    private readonly pesoRepo: Repository<PesoPostEntity>
    ){}

    createPeso( peso : PesoDto): Promise<PesoResponseDto>{
        const newPeso = this.pesoRepo.create(peso);
        console.log(newPeso);
        return this.pesoRepo.save(newPeso);
    }
}
