import { AvanceEntity } from "src/avances/avances.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, BaseEntity} from "typeorm";

@Entity()
export class ExpedienteEntity extends BaseEntity{
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

    @OneToMany(()=> AvanceEntity, avance => avance.expediente)
    avances:AvanceEntity[];
}

/*create table expediente (
  id_expediente serial primary key,
  id_especialista bigint,
  id_paciente bigint,
  id_meta bigint,
  altura_paciente float);
*/