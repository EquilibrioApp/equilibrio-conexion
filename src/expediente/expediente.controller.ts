import { Post , Body, Get, Param, Delete, Put} from '@nestjs/common';
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

    @Get(':id') 
    findOne(@Param('id') id: string){
        return this.expedienteService.findOne(id);
    }

    @Post()
    creteMera(@Body() body: any): Promise<ExpedienteEntity> { //TODO conexion con la relacion automatica ?
        return this.expedienteService.create(body);
    }
    
    @Put(':id') 
    update(@Param('id') id: string,@Body() body: any) {
        return this.expedienteService.update(id, body);
    }

    @Delete(':id') //TODO borrar expediente 
    delete(@Param('id_expediente') id: string) {
        return this.expedienteService.remove(id);
    }
}
