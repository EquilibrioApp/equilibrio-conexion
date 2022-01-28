import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pliegues')
export class PlieguesPostEntity{
    @PrimaryGeneratedColumn()//'uuid'
    id_pliegues: number;

    @Column({default: ''})
    tricipal: number;
    
    @Column({default: ''})
    pectoral: number;
    
    @Column({default: ''})
    bicipital: number;
    
    @Column({default: ''})
    suprailiaca: number;

    @Column({default: ''})
    subescupular: number;

    @Column({default: ''})
    pantorrilla_media: number;

    @Column({default: ''})
    abdminal: number;

    @Column({default: ''})
    muslo_medio: number;

    @Column({default: ''})
    midaxilar: number;
    
    @Column({default: ''})
    id_avance_key: number;
}