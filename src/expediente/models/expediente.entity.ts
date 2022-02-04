import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";

@Entity('expediente')
export class ExpedientePostEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id_expediente: string;

    @Column({default : ""})
    id_especialista: string;
    
    @Column({default : ""})
    id_paciente: string;
    
    @Column({default : ""})
    id_meta: string;
    
    @Column("decimal", { precision: 5, scale: 2 })
    altura_paciente: number;
}

/*create table expediente (
  id_expediente serial primary key, 
  id_especialista bigint,  
  id_paciente bigint, 
  id_meta bigint, 
  altura_paciente float);
*/