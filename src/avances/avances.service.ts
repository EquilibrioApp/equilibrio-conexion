import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import  {  Repository  }  from  'typeorm' ;
import { AvanceEntity } from './avances.entity';

@Injectable()
export class AvancesService {
    constructor(
        @InjectRepository(AvanceEntity)private readonly avanceEntity:Repository<AvanceEntity>,
    ){}
    
    async create(exp: Partial<AvanceEntity>): Promise<AvanceEntity> {
        const item = this.avanceEntity.create(exp);
        return this.avanceEntity.save(item);
    }

    async find(){
        return this.avanceEntity.find();
    }

    async findOne( id : string){
        const item = await this.avanceEntity.findOne(id);
        if(!item) throw new NotFoundException();
        return item;
    }

    async update(id: string, exp: Partial<AvanceEntity>): Promise<AvanceEntity> {
        const item = await this.findOne(id);
        return this.avanceEntity.save({...item, ...exp});
    }

    async remove(id: string): Promise<AvanceEntity> {
        const item = await this.findOne(id);
        return this.avanceEntity.remove(item);
    }
}
