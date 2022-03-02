import { ExpedienteEntity } from "src/expediente/expediente.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity} from "typeorm";
//import { ExpedienteEntity } from "./expediente.entity";

@Entity()
export class MetaEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id: string;

    @Column({default: ''})
    pesoInicial: string;

    @Column({default: ''})
    pesoMeta: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    fechaMeta: Date;

    @OneToOne(() => ExpedienteEntity, expediente => expediente.meta, {eager: true})
    expediente: ExpedienteEntity;
}