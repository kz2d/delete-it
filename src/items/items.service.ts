import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemDto } from './dto/item.dto';
import { PrismaService } from 'src/prisma.service';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) { }

  async create(createItemDto: CreateItemDto) {
    let user = await this.prisma.item.create({
      data: {
        ...createItemDto,
        price: new Decimal(createItemDto.price),
        supplier: { connect: { id: createItemDto.supplier } }
      }
    });

    return user.id;
  }

  async findAll(): Promise<ItemDto[]> {
    let items = await this.prisma.item.findMany();

    return items.map(x => ItemDto.fromPrisma(x));
  }

  async findOne(id: number): Promise<ItemDto> {
    let item = await this.prisma.item.findFirst({ where: { id } });

    return ItemDto.fromPrisma(item);
  }
}
