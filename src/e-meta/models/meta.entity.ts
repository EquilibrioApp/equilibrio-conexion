import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";

@Entity('meta')
export class MetaPostEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id_meta: string;

    @Column({default: ''})
    peso_meta: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    fecha: Date;
}