import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersDto } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/create') //Se crea un nuevo especialista
    create(@Body() body: UsersDto): Promise<UsersDto> {
      console.log(body);
      return this.usersService.create(body);
    }

    @Get('/:email') //Se crea un nuevo especialista
    createDoctor(@Param('email') email:string): Promise<UsersDto> {
      return this.usersService.find(email);
    }
}
