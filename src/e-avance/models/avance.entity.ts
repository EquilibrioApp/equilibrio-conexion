import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
//import { ExpedientePortE } from '../expediente/models/expediente.entity';

@Entity('avance')
export class AvancePostEntity{
    @PrimaryGeneratedColumn()//'uuid'
    id_avance: number;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    fecha: Date;

    @Column({default: ''})
    observacion: string;
    
    @Column()
    id_expediente_key: number;
}