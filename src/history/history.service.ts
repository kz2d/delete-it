import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryDto } from './dto/history.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class HistoryService {
  constructor(private prisma: PrismaService) { }

  async create(createHistoryDto: CreateHistoryDto) {
    let item = await this.prisma.history.create({
      data: {
        ...createHistoryDto,
        user: { connect: { id: createHistoryDto.user } },
        totalPrice: createHistoryDto.items.reduce((x, c) => x + c.price * c.count, 0),
        items: {
          create: createHistoryDto.items.map(x => {
            return {
              ...x,
              item: { connect: { id: x.item } }
            }
          })
        }
      }, include: { items: true }
    });

    return item;
  }

  async findAll(): Promise<HistoryDto[]> {
    let item = await this.prisma.history.findMany({
      include: {
        items: true
      }
    });

    return item.map(x => HistoryDto.fromPrisma(x));
  }

  async findOne(id: number): Promise<HistoryDto> {
    let item = await this.prisma.history.findFirst({
      where: { id }, include: {
        items: true
      }
    });

    return HistoryDto.fromPrisma(item);
  }

  async remove(id: number): Promise<HistoryDto> {
    let item = await this.prisma.history.delete({
      where: { id }, include: {
        items: true
      }
    });

    return HistoryDto.fromPrisma(item);
  }
}
