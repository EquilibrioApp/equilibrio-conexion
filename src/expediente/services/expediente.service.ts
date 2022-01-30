import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ExpedienteDto, ExpedienteResponseDto } from '../dto/expediente.dto';
import { ExpedientePostEntity } from '../models/expediente.entity';


@Injectable()
export class ExpedienteService {
    constructor(@InjectRepository(ExpedientePostEntity)
    private readonly expedienteRepo:Repository<ExpedientePostEntity>
    ){}

    createExpediente( expediente : ExpedienteDto):Promise<ExpedienteResponseDto>{
        const newExpediente = this.expedienteRepo.create(expediente);
        console.log(newExpediente);
        return this.expedienteRepo.save(newExpediente);
    }
}
