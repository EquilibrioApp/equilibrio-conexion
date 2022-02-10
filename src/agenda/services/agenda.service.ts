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

    findAll(){
        return this.agendaRepo.find();
    }

    findOne(id_agenda:string){
        return this.agendaRepo.findOne(id_agenda);
    }
    
    createAgenda( agenda:AgendaDto):Promise<AgendaResponseDto>{
        const newAgenda = this.agendaRepo.create(agenda);
        console.log(newAgenda);
        return this.agendaRepo.save(newAgenda);
    }

    async updateAgenda( id_agenda:string, body: any){
        const agenda  = await this.agendaRepo.findOne(id_agenda);
        this.agendaRepo.merge(agenda, body);
        return this.agendaRepo.save(agenda);
    }

    async removeAgenda(id_agenda:string){
        await this.agendaRepo.delete(id_agenda);
        return true;
    }


    //read
    //update 
    //deleta

}
