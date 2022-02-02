//Estructura que va a llegar al endpoint del registro del expediente
export class ExpedienteDto {
  //Expediente 
  id_expediente?: string;
  id_especialista: string;
  id_paciente: string;
  id_meta: string;
  altura_paciente: number;
  //Meta
  //Avances
}

//Respuesta al crear expediente
export class ExpedienteResponseDto{
  expediente: string;
}

/*create table expediente (
  id_expediente serial primary key, 
  id_especialista bigint,  
  id_paciente bigint, 
  id_meta bigint, 
  altura_paciente float);
*/