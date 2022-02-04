import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import { AvancePostEntity } from "./avances.entity";

@Entity('peso')
export class PesoPostEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id_peso: string;

    @Column("decimal", { precision: 5, scale: 2 })
    peso: number;

    @OneToOne(()=>AvancePostEntity)
    @JoinColumn()
    id_avance: AvancePostEntity;
}

/*
id_peso serial primary key, 
peso float, 
id_avance bigint*/