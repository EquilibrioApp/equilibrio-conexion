import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AvancePostEntity } from '../models/avances.entity';
import { CircunferenciasPostEntity } from '../models/circunferencias.entity';

//import { ExpedienteDto, ExpedienteResponseDto } from '../dto/expediente.dto';
import { ExpedientePostEntity } from '../models/expediente.entity';
import { MetaPostEntity } from '../models/meta.entity';
import { PesoPostEntity } from '../models/peso.entity';
import { PlieguesPostEntity } from '../models/pliegues.entity';


@Injectable()
export class ExpedienteService {
    constructor(
        @InjectRepository(ExpedientePostEntity)private readonly expedienteRepo:Repository<ExpedientePostEntity>,
        @InjectRepository(MetaPostEntity) private readonly metaRepo:Repository<MetaPostEntity>,
        @InjectRepository(AvancePostEntity) private readonly avanceRepo:Repository<AvancePostEntity>,
        @InjectRepository(PesoPostEntity) private readonly pesoRepo:Repository<PesoPostEntity>,
        @InjectRepository(CircunferenciasPostEntity) private readonly circunferenciaRepo:Repository<CircunferenciasPostEntity>,
        @InjectRepository(PlieguesPostEntity) private readonly plieguesRepo:Repository<PlieguesPostEntity>,
    ){}

    findAll(){
        return this.expedienteRepo.find();
    }
    
    async createNewExpe(body:any) {
        //Meta
        const meta = new MetaPostEntity();
            meta.peso_meta = body.peso_meta;
            meta.fecha_meta = body.fecha_meta;
        const newMeta = await this.metaRepo.save(meta);
        //Expediente 
        const expediente = new ExpedientePostEntity();
            expediente.id_especialista = body.id_especialista;
            expediente.id_paciente = body.id_paciente;
            expediente.id_meta = newMeta;
            expediente.altura_paciente = body.altura_paciente;
        const newExpediente = await this.expedienteRepo.save(expediente);
        //Avances
        const avances = new AvancePostEntity();
            avances.fecha = body.fecha;
            avances.observacion = body.observacion;
            avances.id_expediente = newExpediente;
        const newAvance = await this.avanceRepo.save(avances);
        //Peso
        const peso = new PesoPostEntity();
            peso.peso = body.peso;
            peso.id_avance = newAvance;
        //Circunferencia
        const circunferencia = new CircunferenciasPostEntity();
            circunferencia.cadera = body.cadera;
            circunferencia.cintura = body.cintura;
            circunferencia.brazo = body.brazo;
            circunferencia.pierna = body.pierna;
            circunferencia.id_avance = newAvance;
        //Pliegues
        const pliegues = new PlieguesPostEntity();
            pliegues.tricipital = body.tricipital; 
            pliegues.pectoral = body.pectoral;
            pliegues.bicipital = body.bicipital;
            pliegues.suprailiaca = body.suprailiaca;
            pliegues.subescupular = body.subescupular;
            pliegues.pantorrilla_media = body.pantorrilla_media;
            pliegues.abdominal = body.abdominal;
            pliegues.muslo_medio = body.muslo_medio;
            pliegues.midaxilar = body.midaxilar; 
            pliegues.id_avance = newAvance;

        return this.plieguesRepo.save(pliegues), this.circunferenciaRepo.save(circunferencia), this.pesoRepo.save(peso);

    }

    findOne( id_expediente : string){
        return this.expedienteRepo.findOne(id_expediente);
    }   

    async createNewAvance(id_expediente: string, body:any) {
        const expediente = await this.expedienteRepo.findOne(id_expediente);
        const newExpediente = this.expedienteRepo.merge(expediente);
        //Avances
        const avances = new AvancePostEntity();
            avances.fecha = body.fecha;
            avances.observacion = body.observacion;
            avances.id_expediente = newExpediente;
        const newAvance = await this.avanceRepo.save(avances);
        //Peso
        const peso = new PesoPostEntity();
            peso.peso = body.peso;
            peso.id_avance = newAvance;
        //Circunferencia
        const circunferencia = new CircunferenciasPostEntity();
            circunferencia.cadera = body.cadera;
            circunferencia.cintura = body.cintura;
            circunferencia.brazo = body.brazo;
            circunferencia.pierna = body.pierna;
            circunferencia.id_avance = newAvance;
        //Pliegues
        const pliegues = new PlieguesPostEntity();
            pliegues.tricipital = body.tricipital; 
            pliegues.pectoral = body.pectoral;
            pliegues.bicipital = body.bicipital;
            pliegues.suprailiaca = body.suprailiaca;
            pliegues.subescupular = body.subescupular;
            pliegues.pantorrilla_media = body.pantorrilla_media;
            pliegues.abdominal = body.abdominal;
            pliegues.muslo_medio = body.muslo_medio;
            pliegues.midaxilar = body.midaxilar; 
            pliegues.id_avance = newAvance;

        return this.plieguesRepo.save(pliegues), this.circunferenciaRepo.save(circunferencia), this.pesoRepo.save(peso);
    }

    async removeExpediente(id_expediente:string, id_avance:string){
        await this.expedienteRepo.delete(id_expediente);
        await this.avanceRepo.delete(id_expediente);
        return true;
    }

    /*createExpediente( expediente : ExpedienteDto):Promise<ExpedienteResponseDto>{
        const newExpediente = this.expedienteRepo.create(expediente);
        console.log(newExpediente);
        return this.expedienteRepo.save(newExpediente);
    }*/
}
 