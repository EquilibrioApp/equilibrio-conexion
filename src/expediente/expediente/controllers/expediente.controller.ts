import { Post , Body, Get} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ExpedienteService } from '../services/expediente.service';

@Controller('expediente')
export class ExpedienteController {
    constructor(private expedienteService:ExpedienteService){}

    @Get()
    findAll(){
        return this.expedienteService.findAll()
    }

    @Post('/create')
    creteMera(@Body() body: any) {
        return this.expedienteService.createNewExpe(body);
    }
}
