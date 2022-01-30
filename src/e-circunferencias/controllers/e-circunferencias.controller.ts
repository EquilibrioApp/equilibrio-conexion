import { Body, Controller, Post } from '@nestjs/common';
import { CircunferenciaDto, CircunferenciaResponseDto } from '../dto/circunferencias.dto';
import { ECircunferenciasService } from '../services/e-circunferencias.service';

@Controller('circunferencias')
export class ECircunferenciasController {
    constructor(private eCircunferenciasService: ECircunferenciasService){}

    @Post('/create')
    creteCirunferencias(@Body() circunferencias: CircunferenciaDto):Promise<CircunferenciaResponseDto>{
        return this.eCircunferenciasService.createCircunferencia(circunferencias);
    }
}
