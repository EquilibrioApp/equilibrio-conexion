import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('especialista')
export class DoctorPostEntity{
    @PrimaryGeneratedColumn('uuid')//
    id_especialista: string;

    @Column({default: ''})
    nombre_e: string;

    @Column({default: ''})
    app_paterno_e: string;

    @Column({default: ''})
    app_materno_e: string;

    @Column({default: ''})
    sexo_e: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    fecha_nac_e: Date;

    @Column({default: ''})
    telefono_e: string;

    @Column({default: ''})
    cedula: string;

    @Column({default: ''})
    email: string;

    @Column({default: ''})
    password: string;
}