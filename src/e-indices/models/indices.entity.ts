import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";

@Entity('indices')
export class IndicesPostEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id_indices: string;

    @Column("decimal", { precision: 5, scale: 2 })
    masa_corporal: number;

    @Column("decimal", { precision: 5, scale: 2 })
    masa_osea: number;

    @Column("decimal", { precision: 5, scale: 2 })
    masa_residual: number;

    @Column("decimal", { precision: 5, scale: 2 })
    masa_grasa: number;

    @Column({default:""})
    id_avance: string;
}

/*id_indice serial primary key,  
masa_corporal float, 
masa_osea float, 
masa_residual float, 
masa_grasa float, 
id_avance bigint);
*/