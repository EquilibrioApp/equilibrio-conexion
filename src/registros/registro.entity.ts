import { AvanceEntity } from "src/avances/avances.entity";
import { ExpedienteEntity } from "src/expediente/expediente.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RegistroEntity extends BaseEntity{ //TODO no registra true en booleano 
    @PrimaryGeneratedColumn('uuid')//'uuid'
    id: string;

    // @PrimaryColumn( )
    // avanceId: string;

    // @OneToOne(() => AvanceEntity, avance => avance.peso) 
    // @JoinColumn()
    // avance: AvanceEntity;

    @CreateDateColumn()
    createdAt: Date;

    @Column() 
    questionOne: boolean;

    @Column({ default: "" }) 
    questionTwo: string;

    @Column() 
    questionThree: number;

    @Column() 
    questionFour: boolean;

    @Column() 
    questionFive: boolean;

    @Column() 
    questionSix: boolean;

    @Column() 
    questionSeven: number;
    
    @Column() 
    questionEight: number;

    @Column() 
    questionNine: number;

    @Column() 
    questionTen: number;

    @Column() 
    questionEleven: number;

    @Column() 
    questionTwelve: number;

    // @ManyToOne(() => ExpedienteEntity, expediente => expediente.registros)
    // expediente: ExpedienteEntity;
}