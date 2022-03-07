export class AuthDto {
    email: string;
    password: string;
}
export class AuthResponseDto{
    /*  */
    token: token;
    result: User;
}

export class User {
    id?: string;
    name: string;
    userType: string;
    fathersLastName: string;
    mothersLastName: string;
    email: string;
    sex: string;
    birthDate: Date;
    phoneNumber: string;
}

export class token {
    access_token: string;
}