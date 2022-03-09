import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, ManyToOne, BaseEntity} from "typeorm";

 //TODO Relacion 1>M
@Entity()
export class EquivalenciaEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id: string;

    @Column({default : ""})
    nombre:string;
    
    @Column({default : ""})
    grupoAlimencio:string;
    
    @Column({default : ""})
    subgrupo:string;
    
    @Column({default : ""})
    racion : string; 	

}
/*
 id_avance serial primary key, 
 fecha date,
  observacion text,
  id_expediente bigint);*/