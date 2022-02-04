export class AgendaDto {
  id?: string;
  idPaciente: string;
  idEspecialista: string;
  iCalUID : string;
  start: Date;
  end: Date;
  attendees: string
}

export class AgendaResponseDto{
  id: string;
}
