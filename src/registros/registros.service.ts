import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistroEntity } from './registro.entity';

@Injectable()
export class RegistrosService {//TODO operaciones de la evaluación 
    constructor(
        @InjectRepository(RegistroEntity)private readonly registroRepo:Repository<RegistroEntity>,
    ){}
    
    async create(exp: Partial<RegistroEntity>): Promise<RegistroEntity> {
        const item = this.registroRepo.create(exp);
        return this.registroRepo.save(item);
    }

    async find(){
        return this.registroRepo.find();
    }

    async findOne( id : string){
        const item = await this.registroRepo.findOne(id);
        if(!item) throw new NotFoundException();
        return item;
    }

    async update(id: string, exp: Partial<RegistroEntity>): Promise<RegistroEntity> {
        const item = await this.findOne(id);
        return this.registroRepo.save({...item, ...exp});
    }

    async remove(id: string): Promise<RegistroEntity> {
        const item = await this.findOne(id);
        return this.registroRepo.remove(item);
    }
}
