export class AgendaDto {
  id_agenda?: string;
  idPaciente: string;
  idEspecialista: string;
  iCalUID : string;
  start: Date;
  end: Date;
  attendees: string
}

export class AgendaResponseDto{
  id_agenda: string;
}
