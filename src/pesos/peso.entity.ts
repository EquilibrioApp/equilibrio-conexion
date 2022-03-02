import { AvanceEntity } from "src/avances/avances.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, PrimaryColumn, BaseEntity} from "typeorm";

@Entity()
export class PesoEntity extends BaseEntity{
    // @PrimaryGeneratedColumn('uuid')//'uuid'
    // id: string;

    @PrimaryColumn( )
    avanceId: string;

    @OneToOne(() => AvanceEntity, avance => avance.peso) 
    @JoinColumn()
    avance: AvanceEntity;

    @Column("decimal", { precision: 5, scale: 2 })
    peso: number;
}

/*
id_peso serial primary key, 
peso float, 
id_avance bigint*/