import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity} from "typeorm";
//import { ExpedienteEntity } from "./expediente.entity";

@Entity()
export class MetaEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id: string;

    @Column("decimal", { precision: 5, scale: 2 })
    masaCorporal: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    masaOsea: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    masaResidual: number;

    @Column("decimal", { precision: 5, scale: 2 })
    masaGrasa: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    idAvance: string;
}