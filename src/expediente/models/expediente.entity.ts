import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from "typeorm";
import { AvancePostEntity } from "./avances.entity";
import { MetaPostEntity } from "./meta.entity";

@Entity('expediente')
export class ExpedientePostEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id_expediente: string;

    @Column({default : ""})
    id_especialista: string;
    
    @Column({default : ""})
    id_paciente: string;
    
    @OneToOne(() => MetaPostEntity)
    @JoinColumn()
    id_meta: MetaPostEntity;
    
    @Column("decimal", { precision: 5, scale: 2 })
    altura_paciente: number;

    @OneToMany(()=> AvancePostEntity, avance => avance.id_expediente)
    avances:AvancePostEntity[];
}

/*create table expediente (
  id_expediente serial primary key, 
  id_especialista bigint,  
  id_paciente bigint, 
  id_meta bigint, 
  altura_paciente float);
*/