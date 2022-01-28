//Estructura que va a llegar al endpoint del registro de la meta
export class MetaDto {
  id_meta?: number;
  peso_meta: number;
  fecha: Date;
}

//Respuesta al crear meta
export class MetaResponseDto{
  id_meta: number;
}
