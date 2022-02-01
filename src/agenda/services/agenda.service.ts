import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { AgendaDto, AgendaResponseDto } from '../dto/agenda.dto';
import { AgendaPostEntity } from '../models/agenda.entity';

@Injectable()
export class AgendaService {
    constructor(
        @InjectRepository(AgendaPostEntity)
        private readonly  agendaRepo: Repository<AgendaPostEntity>
    ){}

    createAgenda( agenda:AgendaDto):Promise<AgendaResponseDto>{
        const newAgenda = this.agendaRepo.create(agenda);
        console.log(newAgenda);
        return this.agendaRepo.save(newAgenda);
    }
}
