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
