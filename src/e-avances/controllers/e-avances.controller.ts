import { Body, Controller, Post } from '@nestjs/common';
import { AvancesDto, AvancesResponseDto } from '../dto/avances.dto';
import { EAvancesService } from '../services/e-avances.service';

@Controller('avances')
export class EAvancesController {
    constructor(private eAvancesService:EAvancesService){}

    @Post('/create')
    creteMera(@Body() peso: AvancesDto): Promise<AvancesResponseDto>{
        return this.eAvancesService.createAvances(peso);
    }
}
