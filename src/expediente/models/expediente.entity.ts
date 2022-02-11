import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from "typeorm";
import { AvancePostEntity } from "./avances.entity";
import { MetaPostEntity } from "./meta.entity";

@Entity('expediente')
export class ExpedientePostEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id: string;

    @Column({default : ""})
    idEspecialista: string;
    
    @Column({default : ""})
    idPaciente: string;
    
    // @OneToOne(() => MetaPostEntity)
    // @JoinColumn()
    // id_meta: MetaPostEntity;
    
    @Column("decimal", { precision: 5, scale: 2 })
    alturaPaciente: number;

    @OneToMany(()=> AvancePostEntity, avance => avance.expediente)
    avances:AvancePostEntity[];
}

/*create table expediente (
  id_expediente serial primary key,
  id_especialista bigint,
  id_paciente bigint,
  id_meta bigint,
  altura_paciente float);
*/