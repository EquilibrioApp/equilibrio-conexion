//Estructura que va a llegar al endpoint del registro del doctor
export class DoctorDto {
  id_especialista?: string;
  nombre_e: string;
  app_paterno_e: string;
  app_materno_e: string;
  sexo_e: string;
  fecha_nac_e: Date;
  telefono_e: string;
  cedula: string;
  email: string;
  password: string;
}

//Respuesta al consultar un doctor en específico 
export class FindDcotorByIdResponseDto{
    id: string;
    nombre: string;
}

//Respuesta al crear un nuevo doctor
export class DoctorResponseDto{
  id: number;
  tipousuario: string;
  email: string;
  password: string;
  nombre: string;
  app_paterno: string;
  app_materno: string;
  fecha_nac: Date;
  sexo: string;
  telefono: number;
}

//TODO Averiguar si esto se debe de poner en el DTO de Paciente
export class FindPatientsResponseDto{
  id: number;
  nombre: string;
}
//Aquí pueden ir los demás DTO
