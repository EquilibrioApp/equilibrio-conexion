//Estructura que va a llegar al endpoint del registro de la meta
export class MetaDto {
  id?: string;
  pesoMeta: string;
  fechaMeta: Date;
}

//Respuesta al crear meta
export class MetaResponseDto{
  id: string;
}
