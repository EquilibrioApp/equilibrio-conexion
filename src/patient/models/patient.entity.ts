import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('paciente')
export class PatientEntity{
    @PrimaryGeneratedColumn('uuid')//
    id_paciente: string;

    @Column({default: ''})
    nombre_p: string;

    @Column({default: ''})
    app_paterno_p: string;

    @Column({default: ''})
    app_materno_p: string;

    @Column({default: ''})
    sexo_p: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    fecha_nac_p: Date;

    @Column({default: ''})
    nutri_codigo: string;

    @Column({default: ''})
    email: string;

    @Column({default: ''})
    password: string;
}