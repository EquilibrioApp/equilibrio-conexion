import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import { UserEntity } from "src/users/users.entity";

@Entity()
export class PatientEntity extends BaseEntity{
    @PrimaryColumn()//
    userId: string;

    @OneToOne(()=> UserEntity, (user) => user.id)
    @JoinColumn()
    user: UserEntity;

    @Column({default: ''})
    nutriCodigo: string;
}