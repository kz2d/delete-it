import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryDto } from './dto/history.dto';

@Injectable()
export class HistoryService {
  create(createHistoryDto: CreateHistoryDto) {
    throw new NotImplementedException();
  }

  findAll(): HistoryDto[] {
    throw new NotImplementedException();
  }

  findOne(id: number): HistoryDto {
    throw new NotImplementedException();
  }

  remove(id: number): HistoryDto {
    throw new NotImplementedException();
  }
}
