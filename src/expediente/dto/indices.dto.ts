export class IndicesDto {
  id_indices?: string;
  masa_corporal: number;
  masa_osea: number;
  masa_residual: number;
  masa_grasa: number;
  id_avance: string;
}

export class IndicesResponseDto{
  id_indices: string;
}

/*id_indice serial primary key,  
masa_corporal float, 
masa_osea float, 
masa_residual float, 
masa_grasa float, 
id_avance bigint);
*/