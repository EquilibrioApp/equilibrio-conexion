import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IndiceEntity } from './indice.entity';
import { IndicesService } from './indices.service';

@Controller('indices')
export class IndicesController {
    constructor(
        private indicesService:IndicesService,
    ){}

    @Get()
    findAll(){
        return this.indicesService.find();
    }

    @Get(':id') 
    findOne(@Param('id') id: string){
        return this.indicesService.findOne(id);
    }

    @Post()
    creteMera(@Body() body: any): Promise<IndiceEntity> {
        return this.indicesService.create(body);
    }

    @Put(':id') 
    creteAvance(@Param('id') id: string, @Body() body:any) {
        return this.indicesService.update(id, body);
    }

    @Delete(':id') 
    delete(@Param('id') id: string) {
        return this.indicesService.remove(id);
    }
}
