import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";

@Entity('meta')
export class MetaPostEntity{
    @PrimaryGeneratedColumn()//'uuid'
    id_meta: number;

    @Column({default: ''})
    peso_meta: number;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    fecha: Date;
}