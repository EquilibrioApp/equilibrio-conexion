import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, ManyToOne} from "typeorm";
import { ExpedientePostEntity } from './expediente.entity'


 //TODO Relacion 1>M
@Entity('avance')
export class AvancePostEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id_avance: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    fecha: Date;

    @Column("text")
    observacion: string;

    @ManyToOne(() => ExpedientePostEntity, expediente => expediente.avances)
    id_expediente: ExpedientePostEntity;
}
/*
 id_avance serial primary key, 
 fecha date,
  observacion text,
  id_expediente bigint);*/