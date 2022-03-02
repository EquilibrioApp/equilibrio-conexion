import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AvanceEntity } from './avances.entity';
import { AvancesService } from './avances.service';

@Controller('avance')
export class AvancesController {
    constructor(
        private avancesService:AvancesService,
    ){}

    @Get()
    findAll(){
        return this.avancesService.find();
    }

    @Get(':id') //TODO mostrar datos de otras tablas
    findOne(@Param('id') id: string){
        return this.avancesService.findOne(id);
    }

    @Post()
    creteMera(@Body() body: any): Promise<AvanceEntity> {
        return this.avancesService.create(body);
    }

    @Put(':id') 
    creteAvance(@Param('id') id: string, @Body() body:any) {
        return this.avancesService.update(id, body);
    }

    @Delete(':id') 
    delete(@Param('id') id: string, expedienteId:string) {
        return this.avancesService.remove(id, expedienteId);
    }
} 