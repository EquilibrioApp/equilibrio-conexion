import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";

@Entity('avance')
export class AvancePostEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id_avance: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    fecha: Date;

    @Column("text")
    observacion: string;

    @Column({default:""})
    id_expediente: string;
}
/*
 id_avance serial primary key, 
 fecha date,
  observacion text,
  id_expediente bigint);*/