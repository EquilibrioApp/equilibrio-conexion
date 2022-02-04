export class PlieguesDto {
  id_pliegues?: string;
  tricipital: number;
  pectoral: number;
  bicipital: number;
  suprailiaca: number;
  subescupular: number;
  pantorrilla_media: number;
  abdominal: number;
  muslo_medio: number;
  midaxilar: number;
  id_avance: string;
}

export class PlieguesResponseDto{
  id_pliegues: string;
}

/*id_pliegues serial primary key, 
    tricipital float, pectoral float,
    bicipital float, suprailiaca float,
    subescupular float, pantorrilla_media float,
    abdominal float, muslo_medio float,
    midaxilar float, id_avance bigint*/