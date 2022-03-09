import { AvanceEntity } from "src/avances/avances.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity, PrimaryColumn} from "typeorm";

@Entity()
export class CircunferenciaEntity extends BaseEntity{
    // @PrimaryGeneratedColumn('uuid')//'uuid'
    // id: string;

    @PrimaryColumn()
    avanceId: string;

    @OneToOne(() => AvanceEntity, avance => avance.circunferencia) 
    @JoinColumn()
    avance: AvanceEntity;

    @Column("decimal", { precision: 5, scale: 2 })
    femoral: number;

    @Column("decimal", { precision: 5, scale: 2 })
    biestiloideo: number;

    @Column("decimal", { precision: 5, scale: 2 })
    cuello: number;

    @Column("decimal", { precision: 5, scale: 2 })
    cintura: number;

    @Column("decimal", { precision: 5, scale: 2 })
    cadera: number;

    @Column("decimal", { precision: 5, scale: 2 })
    brazo: number;

    @Column("decimal", { precision: 5, scale: 2 })
    pierna: number;

    // @OneToOne(()=>AvancePostEntity)
    // @JoinColumn()
    // id_avance: AvancePostEntity;
}
/*id_circunferencia serial primary key,
 cadera float, 
 cintura float, 
 brazo float, 
 pierna float 
 id_avance bigint);
*/