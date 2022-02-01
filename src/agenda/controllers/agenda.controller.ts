import { Body, Controller, Post } from '@nestjs/common';
import { AgendaDto, AgendaResponseDto } from '../dto/agenda.dto';
import { AgendaService } from '../services/agenda.service';

@Controller('agenda')
export class AgendaController {
    constructor(private agendaService:AgendaService){}

    @Post('/create')
    creteMera(@Body() agenda: AgendaDto): Promise<AgendaResponseDto>{
        return this.agendaService.createAgenda(agenda);
    }
}
