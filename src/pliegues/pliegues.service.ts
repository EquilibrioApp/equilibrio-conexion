import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlieguesEntity } from './pliegues.entity';

@Injectable()
export class PlieguesService {
    constructor(
        @InjectRepository(PlieguesEntity)private readonly pliegueRepo:Repository<PlieguesEntity>,
    ){}
    
    async create(exp: Partial<PlieguesEntity>): Promise<PlieguesEntity> {
        const item = this.pliegueRepo.create(exp);
        return this.pliegueRepo.save(item);
    }

    async find(){
        return this.pliegueRepo.find();
    }

    async findOne( id : string){
        const item = await this.pliegueRepo.findOne(id);
        if(!item) throw new NotFoundException();
        return item;
    }

    async update(id: string, exp: Partial<PlieguesEntity>): Promise<PlieguesEntity> {
        const item = await this.findOne(id);
        return this.pliegueRepo.save({...item, ...exp});
    }

    async remove(id: string): Promise<PlieguesEntity> {
        const item = await this.findOne(id);
        return this.pliegueRepo.remove(item);
    }
}
