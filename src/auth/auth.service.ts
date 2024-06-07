import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
      ) {}
    
      async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findUser(username);
        if (user && user.password === password) { // Asegúrate de comparar las contraseñas correctamente
            const { password, ...result } = user;
          return result;
        }
        return null;
      }
    
      async login(user: any) {
        const payload = { username: user.username, sub: user.id, role: user.role };
        return {
          username: user.username,
          role: user.role,
          token: this.jwtService.sign(payload),
        };
      }
    
      async register(username: string, password: string, role: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return this.usersService.createUser(username, hashedPassword, role);
      }


}
