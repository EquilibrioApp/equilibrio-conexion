import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";

@Entity('pliegues')
export class PlieguesPostEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id_pliegues: string;

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
    pantorrilla_media: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    abdominal: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    muslo_medio: number;
    
    @Column("decimal", { precision: 5, scale: 2 })
    midaxilar: number;

    @Column({default:""})
    id_avance: string;
}

/*id_pliegues serial primary key, 
    tricipital float, pectoral float,
    bicipital float, suprailiaca float,
    subescupular float, pantorrilla_media float,
    abdominal float, muslo_medio float,
    midaxilar float, id_avance bigint*/