export class AvancesDto {
  id?: string;
  fecha: Date;
  observacion: string;
  createdAt: Date;
  updatedAt: Date;
  expediente: string;
}

export class AvancesResponseDto{
  id: string;
}

/*
 id_avance serial primary key, 
 fecha date,
  observacion text,
  id_expediente bigint);*/