import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, PrimaryColumn, BaseEntity} from "typeorm";
//import { AvanceEntity } from "./avances.entity";

@Entity()
export class PesoEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id: string;

    // @PrimaryColumn()
    // avanceId: string;

    // @OneToOne(() => AvancePostEntity) 
    // @JoinColumn()
    // avance: AvancePostEntity;

    @Column("decimal", { precision: 5, scale: 2 })
    peso: number;

    /*
    @OneToOne(()=>AvancePostEntity)
    @JoinColumn()
    id_avance: AvancePostEntity;
    */
}

/*
id_peso serial primary key, 
peso float, 
id_avance bigint*/