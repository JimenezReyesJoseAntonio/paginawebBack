import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { UserEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly usuarioRepository: UserRepository
    ) {}

    async createUser(username: string, password: string, role: string): Promise<UserEntity> {
        const user = this.usuarioRepository.create({ username, password, role });
        return this.usuarioRepository.save(user);
      }
    
      async findUser(username: string): Promise<UserEntity | undefined> {
        return this.usuarioRepository.findOne({
          where: { username },
        });
      }
}
