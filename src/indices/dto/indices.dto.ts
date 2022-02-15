export class IndicesDto {
  id?: string;
  masaCorporal: number;
  masaOsea: number;
  masaResidual: number;
  masaGrasa: number;
  idAvance: string;
}

export class IndicesResponseDto{
  id: string;
}

/*id_indice serial primary key,  
masa_corporal float, 
masa_osea float, 
masa_residual float, 
masa_grasa float, 
id_avance bigint);
*/