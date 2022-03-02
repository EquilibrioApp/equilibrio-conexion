import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PlieguesEntity } from './pliegues.entity';
import { PlieguesService } from './pliegues.service';

@Controller('pliegues')
export class PlieguesController {
    constructor(
        private plieguesService:PlieguesService,
    ){}

    @Get()
    findAll(){
        return this.plieguesService.find();
    }

    @Get(':id') 
    findOne(@Param('id') id: string){
        return this.plieguesService.findOne(id);
    }

    @Post()
    creteMera(@Body() body: any): Promise<PlieguesEntity> {
        return this.plieguesService.create(body);
    }

    @Put(':id') 
    creteAvance(@Param('id') id: string, @Body() body:any) {
        return this.plieguesService.update(id, body);
    }

    @Delete(':id') 
    delete(@Param('id') id: string) {
        return this.plieguesService.remove(id);
    }
}
