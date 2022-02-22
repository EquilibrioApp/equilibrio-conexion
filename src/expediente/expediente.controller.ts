import { Post , Body, Get, Param, Delete} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { MetasService } from 'src/metas/metas.service';
import { ExpedienteEntity } from './expediente.entity';
import { ExpedienteService } from './expediente.service';

@Controller('expediente') ///+:expedientId/avance
export class ExpedienteController {
    constructor(
        private expedienteService:ExpedienteService,
        private metasService:MetasService,
    ){}

    @Get()
    findAll(){
        return this.expedienteService.find();
    }

    @Get(':id_expediente') //TODO mostrar datos de otras tablas
    findOne(@Param('id_expediente') id_expediente: string){
        return this.expedienteService.findOne(id_expediente);
    }
    @Post()
    creteMera(@Body() body: any): Promise<ExpedienteEntity> {
        return this.expedienteService.create(body);
    }
    /*@Post(':id_expediente') 
    creteAvance(@Param('id_expediente') id_expediente: string,@Body() body: any) {
        return this.expedienteService.createNewAvance(id_expediente, body);
    }

    @Delete(':id_expediente') //TODO borrar meta
    delete(@Param('id_expediente') id_expediente: string, id_avance:string) {
        return this.expedienteService.removeExpediente(id_expediente, id_avance);
    }*/
}
