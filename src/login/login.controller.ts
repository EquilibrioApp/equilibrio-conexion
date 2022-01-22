import { Controller, Get } from '@nestjs/common';

@Controller('login') //'/login'
export class LoginController {
  @Get('/patient')
  getPatientLogin() {
    return 'Logueado como Paciente';
  }

  @Get('/doctor')
  getDoctortLogin() {
    return 'Logueado como Especialista';
  }

  @Get('/auxiliar')
  getAuxiliarLogin() {
    return 'Logueado como Auxiliar';
  }
}
