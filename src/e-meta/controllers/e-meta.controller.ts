import { Body, Controller, Post } from '@nestjs/common';
import { MetaDto, MetaResponseDto } from '../dto/meta.dto';

import { EMetaService } from '../services/e-meta.service';

@Controller('meta')
export class EMetaController {
    
    constructor(private eMetaService:EMetaService){}

    @Post('/create')
    creteMera(@Body() meta: MetaDto): Promise<MetaDto>{
        return this.eMetaService.createMeta(meta);
    }

    
}
