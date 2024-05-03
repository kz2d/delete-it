import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemDto } from './dto/item.dto';

@Injectable()
export class ItemsService {
  create(createItemDto: CreateItemDto) {
    throw new NotImplementedException();
  }

  findAll(): ItemDto[] {
    throw new NotImplementedException();
  }

  findOne(id: number): ItemDto {
    throw new NotImplementedException();
  }
}
