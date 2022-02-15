import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity} from "typeorm";
//import { AvanceEntity } from "./avances.entity";

@Entity()
export class PlieguesEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id: string;

    @Column("decimal", { precision: 5, scale: 2 })
    tricipital: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    pectoral: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    bicipital: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    suprailiaca: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    subescupular: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    pantorrillaMedia: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    abdominal: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    musloMedio: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    midaxilar: number;

    // @OneToOne(()=>AvancePostEntity)
    // @JoinColumn()
    // id_avance: AvancePostEntity	;
}

/*id_pliegues serial primary key, 
    tricipital float, pectoral float,
    bicipital float, suprailiaca float,
    subescupular float, pantorrilla_media float,
    abdominal float, muslo_medio float,
    midaxilar float, id_avance bigint*/