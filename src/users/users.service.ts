import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    throw new NotImplementedException();
  }

  findAll(): UserDto[] {
    throw new NotImplementedException();
  }

  findOne(id: number): UserDto {
    throw new NotImplementedException();
  }
  remove(id: number): UserDto {
    throw new NotImplementedException();
  }
}
