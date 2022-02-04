//Estructura que va a llegar al endpoint del registro de la meta
export class MetaDto {
  id_meta?: string;
  peso_meta: string;
  fecha: Date;
}

//Respuesta al crear meta
export class MetaResponseDto{
  id_meta: string;
}
