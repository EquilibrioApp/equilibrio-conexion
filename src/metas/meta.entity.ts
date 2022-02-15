import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity} from "typeorm";
//import { ExpedienteEntity } from "./expediente.entity";

@Entity('meta')
export class MetaEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id: string;

    @Column({default: ''})
    pesoMeta: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    fechaMeta: Date;
}