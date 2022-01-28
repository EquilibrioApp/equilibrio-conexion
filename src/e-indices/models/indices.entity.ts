import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('indices')
export class IndicesPostEntity{
    @PrimaryGeneratedColumn()//'uuid'
    id_indice: number;

    @Column({default: ''})
    masa_corporal: number;

    @Column({default: ''})
    masa_osea: number;

    @Column({default: ''})
    masa_residual: number;

    @Column({default: ''})
    masa_grasa: number;
    
    @Column({default: ''})
    id_avance_key: number;
}