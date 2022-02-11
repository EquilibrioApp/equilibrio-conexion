import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, ManyToOne} from "typeorm";

 //TODO Relacion 1>M
@Entity('avance')
export class AvancePostEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id_avance: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'}) //TODO fecha del dia actual automatico y del expediente ;
    fecha: Date;

    @Column("text")
    observacion: string;
}
/*
 id_avance serial primary key, 
 fecha date,
  observacion text,
  id_expediente bigint);*/