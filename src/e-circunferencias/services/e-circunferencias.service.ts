import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CircunferenciaDto, CircunferenciaResponseDto } from '../dto/circunferencias.dto';
import { CircunferenciasPostEntity } from '../models/circunferencias.entity';

@Injectable()
export class ECircunferenciasService {
    constructor(
        @InjectRepository(CircunferenciasPostEntity)
        private readonly circunferenciasRepo:Repository<CircunferenciasPostEntity>
    ){}

    createCircunferencia (circunferencias:CircunferenciaDto):Promise<CircunferenciaResponseDto>{
        const newCircunferencias = this.circunferenciasRepo.create(circunferencias);
        console.log(newCircunferencias);
        return this.circunferenciasRepo.save(newCircunferencias);
    }
}
