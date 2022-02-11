//Estructura que va a llegar al endpoint del registro del expediente
export class ExpedienteDto {
  //Expediente 
  id?: string;
  idEspecialista: string;
  idPaciente: string;
  //id_meta: string;
  alturaPaciente: number;
  //avances: AvancesPostEntity[]
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