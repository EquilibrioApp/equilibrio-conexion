
export class CircunferenciaDto {
  id_circunferenia?: string;
  cadera: number;
  cintura: number;
  brazo: number;
  pierna: number;
  id_avance: string;
}

export class CircunferenciaResponseDto{
  id_circunferenia: string;
}

/*id_circunferencia serial primary key,
 cadera float,
  cintura float,
   brazo float,
    pierna float
     id_avance bigint);
*/