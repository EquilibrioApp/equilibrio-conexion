import { AvanceEntity } from "src/avances/avances.entity";
import { MetaEntity } from "src/metas/meta.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, BaseEntity, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class ExpedienteEntity extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id: string;

    @Column({default : ""})
    especialistaId: string;
    
    @Column({default : ""})
    pacienteId: string;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column("decimal", { precision: 5, scale: 2 })
    alturaPaciente: number;

    @OneToMany(()=> AvanceEntity, avance => avance.expediente)
    avances:AvanceEntity;
    
    @OneToOne(() => MetaEntity , meta => meta.expediente)
    meta: MetaEntity;
}

/*create table expediente (
  id_expediente serial primary key,
  id_especialista bigint,
  id_paciente bigint,
  id_meta bigint,
  altura_paciente float);
*/