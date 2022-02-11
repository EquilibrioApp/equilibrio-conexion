import { Post , Body, Get, Param, Delete} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ExpedientePostEntity } from '../models/expediente.entity';
import { ExpedienteService } from '../services/expediente.service';

@Controller('expediente') ///+:expedientId/avance
export class ExpedienteController {
    constructor(private expedienteService:ExpedienteService){}

    @Get()
    findAll(){
        return this.expedienteService.find();
    }

    @Get(':id_expediente') //TODO mostrar datos de otras tablas
    findOne(@Param('id_expediente') id_expediente: string){
        return this.expedienteService.findOne(id_expediente);
    }
    @Post()
    creteMera(@Body() body: any): Promise<ExpedientePostEntity> {
        return this.expedienteService.create(body);
    }
    /*

    @Post(':id_expediente') 
    creteAvance(@Param('id_expediente') id_expediente: string,@Body() body: any) {
        return this.expedienteService.createNewAvance(id_expediente, body);
    }

    @Delete(':id_expediente') //TODO borrar meta
    delete(@Param('id_expediente') id_expediente: string, id_avance:string) {
        return this.expedienteService.removeExpediente(id_expediente, id_avance);
    }*/
}
