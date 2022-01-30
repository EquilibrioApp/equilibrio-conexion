import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";

@Entity('circunferencia')
export class CircunferenciasPostEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id_circunferenia: string;

    @Column("decimal", { precision: 5, scale: 2 })
    cadera: number;

    @Column("decimal", { precision: 5, scale: 2 })
    cintura: number;

    @Column("decimal", { precision: 5, scale: 2 })
    brazo: number;

    @Column("decimal", { precision: 5, scale: 2 })
    pierna: number;

    @Column( { default:"" })
    id_avance: string;
}
/*id_circunferencia serial primary key,
 cadera float, 
 cintura float, 
 brazo float, 
 pierna float 
 id_avance bigint);
*/