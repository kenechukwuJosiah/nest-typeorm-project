import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Users) private userRespository: Repository<Users>,
  ) {}

  getAll(): Promise<Users[]> {
    return this.userRespository.find();
  }

  async getOneById(id: number): Promise<Users> {
    try {
      const user = await this.userRespository.findOneOrFail(id);
      return user;
    } catch (err) {
      throw err;
    }
    return;
  }

  createUser(name: string): Promise<Users> {
    const newUser = this.userRespository.create({ name });

    return this.userRespository.save(newUser);
  }

  async updateUser(id: number, name: string): Promise<Users> {
    const user = await this.getOneById(id);
    user.name = name;
    return this.userRespository.save(user);
  }

  async deleteUser(id: number): Promise<Users> {
    const user = await this.getOneById(id);

    return this.userRespository.remove(user);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
