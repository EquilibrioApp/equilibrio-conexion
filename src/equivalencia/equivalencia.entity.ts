import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, ManyToOne, BaseEntity} from "typeorm";

 //TODO Relacion 1>M
@Entity()
export class AvanceEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id: string;

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