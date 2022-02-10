import { Post , Body, Get, Param, Delete} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ExpedienteService } from '../services/expediente.service';

@Controller('expediente')
export class ExpedienteController {
    constructor(private expedienteService:ExpedienteService){}

    @Get()
    findAll(){
        return this.expedienteService.findAll();
    }

    @Get(':id_expediente') //TODO mostrar datos de otras tablas
    findOne(@Param('id_expediente') id_expediente: string){
        return this.expedienteService.findOne(id_expediente);
    }

    @Post('/create')
    creteMera(@Body() body: any) {
        return this.expedienteService.createNewExpe(body);
    }

    @Post(':id_expediente') 
    creteAvance(@Param('id_expediente') id_expediente: string,@Body() body: any) {
        return this.expedienteService.createNewAvance(id_expediente, body);
    }

    @Delete(':id_expediente') //TODO borrar meta
    delete(@Param('id_expediente') id_expediente: string, id_avance:string) {
        return this.expedienteService.removeExpediente(id_expediente, id_avance);
    }
}
