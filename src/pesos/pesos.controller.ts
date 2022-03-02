import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PesoEntity } from './peso.entity';
import { PesosService } from './pesos.service';

@Controller('peso')
export class PesosController {
    constructor(
        private pesosService:PesosService,
    ){}

    @Get()
    findAll(){
        return this.pesosService.find();
    }

    @Get(':id') 
    findOne(@Param('id') id: string){
        return this.pesosService.findOne(id);
    }

    @Post()
    creteMera(@Body() body: any): Promise<PesoEntity> {
        return this.pesosService.create(body);
    }

    @Put(':id') 
    creteAvance(@Param('id') id: string, @Body() body:any) {
        return this.pesosService.update(id, body);
    }

    @Delete(':id') 
    delete(@Param('id') id: string) {
        return this.pesosService.remove(id);
    }
}
