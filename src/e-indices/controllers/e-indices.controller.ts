import { Body, Controller, Post } from '@nestjs/common';
import { IndicesDto, IndicesResponseDto } from '../dto/indices.dto';
import { EIndicesService } from '../services/e-indices.service';

@Controller('indices')
export class EIndicesController {
    constructor(private eIndicesService:EIndicesService){}

    @Post('/create')
    creteMera(@Body() indices: IndicesDto): Promise<IndicesResponseDto>{
        return this.eIndicesService.createIndices(indices);
    }
}
