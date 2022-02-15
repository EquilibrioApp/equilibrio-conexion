import { ExpedienteEntity } from "src/expediente/expediente.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, ManyToOne, BaseEntity, CreateDateColumn, UpdateDateColumn} from "typeorm";

 //TODO Relacion 1>M
 //TODO Actualizacion a CamelCase en DTO y Entidad
@Entity()
export class AvanceEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id: string;

    @Column("text")
    observacion: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => ExpedienteEntity, expediente => expediente.avances, {eager: true})
    expediente: ExpedienteEntity;
}
/*
 id_avance serial primary key, 
 fecha date,
  observacion text,
  id_expediente bigint);*/