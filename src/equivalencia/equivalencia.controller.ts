import { Controller, Get } from '@nestjs/common';
import { EquivalenciaService } from './equivalencia.service';

@Controller('equivalencia')
export class EquivalenciaController {
    constructor(
        private equivalenciaService:EquivalenciaService,
    ){}

    @Get()
    find(){
        // return this.equivalenciaService.convertFile();
    }
}
