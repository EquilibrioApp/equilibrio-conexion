import { AvanceEntity } from "src/avances/avances.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity, PrimaryColumn} from "typeorm";
//import { ExpedienteEntity } from "./expediente.entity";

@Entity()
export class IndiceEntity extends BaseEntity{
    // @PrimaryGeneratedColumn('uuid')//'uuid'
    // id: string;

    @PrimaryColumn()
    avanceId: string;

    @OneToOne(() => AvanceEntity, avance => avance.indice) 
    @JoinColumn()
    avance: AvanceEntity;

    @Column("decimal", { precision: 5, scale: 2 })
    masaCorporal: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    masaOsea: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    masaResidual: number;

    @Column("decimal", { precision: 5, scale: 2 })
    masaGrasa: number;
    
}