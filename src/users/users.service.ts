import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto): Promise<Number> {
    let user = await this.prisma.user.create({ data: { email: createUserDto.email, name: createUserDto.name, password: createUserDto.password } });

    return user.id;
  }

  async findAll(): Promise<UserDto[]> {
    let users = await this.prisma.user.findMany();

    return users;
  }

  async findOne(id: number): Promise<UserDto> {
    let user = await this.prisma.user.findFirst({ where: { id: id } });

    return user;
  }

  async remove(id: number): Promise<UserDto> {
    let user = await this.prisma.user.delete({ where: { id: id } });

    return user;
  }
}
