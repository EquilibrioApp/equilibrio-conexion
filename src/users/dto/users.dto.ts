import { Contains, IsEmail, IsNotEmpty } from "class-validator";

export class UsersDto {
    //TODO Averiguar pipes
    id?: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    userType: string;

    @IsNotEmpty()
    fathersLastName: string;

    @IsNotEmpty()
    mothersLastName: string;

    @IsNotEmpty()
    @IsEmail()
    @Contains('@google.com')
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    sex: string;

    @IsNotEmpty()
    birthDate: Date;

    @IsNotEmpty()
    phoneNumber: string;

    //Info en caso de ser Doctor
    @IsNotEmpty()
    cedula?: string;

    @IsNotEmpty()
    houseNumber?: string;
    
    @IsNotEmpty()
    streetName?: string;

    @IsNotEmpty()
    postalCode?: string;

    //Info en caso de ser paciente

    @IsNotEmpty()
    nutriCodigo?: string;
    
}