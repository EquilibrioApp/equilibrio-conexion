import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";

@Entity('expediente')
export class ExpedientePostEntity{
    @PrimaryGeneratedColumn()//'uuid'
    id_expediente: number;

    @Column()
    id_especialista_key: number;

    @Column()
    id_paciente_key: number;
    

    @Column()
    altura_paciente: number;
}