import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AgendaDto, AgendaResponseDto } from '../dto/agenda.dto';
import { AgendaService } from '../services/agenda.service';

@Controller('agenda')
export class AgendaController {
    constructor(private agendaService:AgendaService){}

    @Get()
    findAll() {
        return this.agendaService.findAll();
    }

    @Get(':id_agenda')
    findOne(@Param('id_agenda') id_agenda: string) {
        return this.agendaService.findOne(id_agenda);
    }

    @Post('/create')
    creteMera(@Body() agenda: AgendaDto): Promise<AgendaResponseDto>{
        return this.agendaService.createAgenda(agenda);
    }

    @Put(':id_agenda')
    update(@Param('id_agenda') id_agenda: string, @Body() body: any) {
        return this.agendaService.updateAgenda(id_agenda, body);
    }

    @Delete(':id_agenda')
    delete(@Param('id_agenda') id_agenda: string) {
        return this.agendaService.removeAgenda(id_agenda);
    }
}
