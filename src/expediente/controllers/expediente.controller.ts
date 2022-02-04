import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ExpedienteDto, ExpedienteResponseDto } from '../dto/expediente.dto';
import { ExpedienteService } from '../services/expediente.service';

@Controller('expediente')
export class ExpedienteController {
    constructor(private expedienteService:ExpedienteService){}

    @Post('/create')
    creteMera(@Body() expediente: ExpedienteDto): Promise<ExpedienteResponseDto>{
        return this.expedienteService.createExpediente(expediente);
    }
}
