import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import  {  Repository  }  from  'typeorm' ;
import { IndiceEntity } from './indice.entity';

@Injectable()
export class IndicesService {
    constructor(
        @InjectRepository(IndiceEntity)private readonly indiceEntity:Repository<IndiceEntity>,
    ){}
    
    async create(exp: Partial<IndiceEntity>): Promise<IndiceEntity> {
        const item = this.indiceEntity.create(exp);
        return this.indiceEntity.save(item);
    }

    async find(){
        return this.indiceEntity.find();
    }

    async findOne( id : string){
        const item = await this.indiceEntity.findOne(id);
        if(!item) throw new NotFoundException();
        return item;
    }

    async update(id: string, exp: Partial<IndiceEntity>): Promise<IndiceEntity> {
        const item = await this.findOne(id);
        return this.indiceEntity.save({...item, ...exp});
    }

    async remove(id: string): Promise<IndiceEntity> {
        const item = await this.findOne(id);
        return this.indiceEntity.remove(item);
    }
}

