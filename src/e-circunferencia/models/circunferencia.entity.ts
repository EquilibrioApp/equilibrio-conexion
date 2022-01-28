import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('circunferencia')
export class CircunferenciaPostEntity{
    @PrimaryGeneratedColumn()//'uuid'
    id_circunferencia: number;

    @Column({default: ''})
    cadera: number;

    @Column({default: ''})
    cintura: number;
    
    @Column({default: ''})
    brazo: number;

    @Column({default: ''})
    pierna: number;

    @Column({default: ''})
    id_avance_key: number;
}