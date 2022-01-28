import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('peso')
export class PesoPostEntity{
    @PrimaryGeneratedColumn()//'uuid'
    id_peso: number;

    @Column({default: ''})
    peso: number;

    @Column({default: ''})
    id_avance_key: number;
}