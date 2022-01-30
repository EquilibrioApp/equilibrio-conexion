import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";

@Entity('peso')
export class PesoPostEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id_peso: string;

    @Column("decimal", { precision: 5, scale: 2 })
    peso: number;

    @Column({default:""})
    id_avance: string;
}

/*
id_peso serial primary key, 
peso float, 
id_avance bigint*/