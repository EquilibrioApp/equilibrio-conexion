import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, ManyToOne, BaseEntity, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { ExpedientePostEntity } from './expediente.entity'

 //TODO Relacion 1>M
 //TODO Actualizacion a CamelCase en DTO y Entidad
@Entity()
export class AvancePostEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id: string;

    @Column("text")
    observacion: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => ExpedientePostEntity, expediente => expediente.avances, {eager: true})
    expediente: ExpedientePostEntity;
}
/*
 id_avance serial primary key, 
 fecha date,
  observacion text,
  id_expediente bigint);*/