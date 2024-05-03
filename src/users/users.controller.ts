import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@ApiTags('user')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiResponse({ status: 200, type: [UserDto] })
  @Get()
  findAll(): UserDto[] {
    return this.usersService.findAll();
  }

  @ApiResponse({ status: 200, type: UserDto })

  @Get(':id')
  findOne(@Param('id') id: string): UserDto {
    return this.usersService.findOne(+id);
  }

  @ApiResponse({ status: 200, type: UserDto })

  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string): UserDto {
    return this.usersService.remove(+id);
  }
}
