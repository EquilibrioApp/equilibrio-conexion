import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AvancesDto, AvancesResponseDto } from '../dto/avances.dto';
import { AvancePostEntity } from '../models/avances.entity';

@Injectable()
export class EAvancesService {
    constructor(
        @InjectRepository(AvancePostEntity)
        private readonly  avancesRepo: Repository<AvancePostEntity>
    ){}

    createAvances( avances:AvancesDto):Promise<AvancesResponseDto>{
        const newAvances = this.avancesRepo.create(avances);
        console.log(newAvances);
        return this.avancesRepo.save(newAvances);
    }
}
