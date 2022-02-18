import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PesoEntity } from './peso.entity';

@Injectable()
export class PesosService {
    constructor(
        @InjectRepository(PesoEntity)private readonly pesoRepo:Repository<PesoEntity>,
    ){}
    
    async create(exp: Partial<PesoEntity>): Promise<PesoEntity> {
        const item = this.pesoRepo.create(exp);
        return this.pesoRepo.save(item);
    }

    async find(){
        return this.pesoRepo.find();
    }

    async findOne( id : string){
        const item = await this.pesoRepo.findOne(id);
        if(!item) throw new NotFoundException();
        return item;
    }

    async update(id: string, exp: Partial<PesoEntity>): Promise<PesoEntity> {
        const item = await this.findOne(id);
        return this.pesoRepo.save({...item, ...exp});
    }

    async remove(id: string): Promise<PesoEntity> {
        const item = await this.findOne(id);
        return this.pesoRepo.remove(item);
    }
}
