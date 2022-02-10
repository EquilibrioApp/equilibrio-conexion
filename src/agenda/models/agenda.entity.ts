import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";

@Entity('agenda')
export class AgendaPostEntity{
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id_agenda: string;
    
    @Column({default:""})
    idPaciente: string;

    @Column({default:""})
    idEspecialista: string;
    
    @Column({default:""})
    iCalUID : string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    start: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    end: Date;

    @Column({default:""})
    attendees: string;
}
/*
 id?: string;
  idPaciente: string;
  idEspecialista: string;
  iCalUID : string;
  start: Date;
  end: Date;
  attendees: string*/