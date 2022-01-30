import { Body, Controller, Post } from '@nestjs/common';
import { PesoDto, PesoResponseDto } from '../dto/peso.dto';
import { EPesoService } from '../services/e-peso.service';

@Controller('peso')
export class EPesoController {
    constructor(private ePesoService:EPesoService){}

    @Post('/create')
    creteMera(@Body() peso: PesoDto): Promise<PesoResponseDto>{
        return this.ePesoService.createPeso(peso);
    }
}
