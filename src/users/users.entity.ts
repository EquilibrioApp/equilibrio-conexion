import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({default: ''})
    name: string;

    @Column({default: ''})
    userType: string;

    @Column({default: ''})
    fathersLastName: string;

    @Column({default: ''})
    mothersLastName: string;

    @Column({default: ''})
    email: string;
    
    @Column({default: ''})
    password: string;

    @Column({default: ''})
    sex: string;
    
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    birthDate: Date;
    
    @Column({default: ''})
    phoneNumber: string;
}