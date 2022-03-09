import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { resolve } from 'path/win32';
import { Repository } from 'typeorm';
import * as xlsm from "xlsx";
import {WorkBook, WorkSheet} from 'xlsx';
import { EquivalenciaEntity } from './equivalencia.entity';

@Injectable()
export class EquivalenciaService {

    constructor(
        // private httpService: HttpService,
        @InjectRepository(EquivalenciaEntity)private readonly equivalenciaRepo:Repository<EquivalenciaEntity>,
    ){}

    convertFile(equivalencia : Partial<EquivalenciaEntity>)  {
        try {
            
            
        } catch (error) {
            
        }

        // const excel = xlsm.readFile('./HojaDeEquivalencia');
        // const nombreHoja = excel.Sheets["Hoja"];
        // const datos = xlsm.utils.sheet_to_json(nombreHoja[0]);
        // // const datos = await XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[3]]);
        // console.log(datos);
        // return datos;
    }
}
