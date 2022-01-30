import { Body, Controller, Post } from '@nestjs/common';
import { PlieguesDto, PlieguesResponseDto } from '../dto/pliegues.dto';
import { EPlieguesService } from '../services/e-pliegues.service';

@Controller('pliegues')
export class EPlieguesController {
    constructor(private ePlieguesService:EPlieguesService){}

    @Post('/create')
    creteMera(@Body() pliegues: PlieguesDto): Promise<PlieguesResponseDto>{
        return this.ePlieguesService.createPliegues(pliegues);
    }
}
