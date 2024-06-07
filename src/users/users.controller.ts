import { Body, Controller,Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usuarioService: UsersService) {}

    @Post()
  async createUser(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('role') role: string,
  ): Promise<any> {
    return this.usuarioService.createUser(username, password, role);
  }

  @Get(':username')
  async getUser(@Param('username') username: string): Promise<any | undefined> {
    return this.usuarioService.findUser(username);
  }

}
