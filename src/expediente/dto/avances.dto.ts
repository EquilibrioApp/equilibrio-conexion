export class AvancesDto {
  id_avance?: string;
  fecha: Date;
  observacion: string;
  id_expediente: string;
}

export class AvancesResponseDto{
  id_avance: string;
}

/*
 id_avance serial primary key, 
 fecha date,
  observacion text,
  id_expediente bigint);*/