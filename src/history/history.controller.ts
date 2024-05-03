import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HistoryDto } from './dto/history.dto';

@ApiBearerAuth()
@ApiTags('history')
@Controller('api/history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) { }

  @Post()
  create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historyService.create(createHistoryDto);
  }

  @ApiResponse({ status: 200, type: [HistoryDto] })
  @Get()
  findAll(): HistoryDto[] {
    return this.historyService.findAll();
  }

  @ApiResponse({ status: 200, type: HistoryDto })
  @Get(':id')
  findOne(@Param('id') id: string): HistoryDto {
    return this.historyService.findOne(+id);
  }

  @ApiResponse({ status: 200, type: HistoryDto })
  @Delete(':id')
  remove(@Param('id') id: string): HistoryDto {
    return this.historyService.remove(+id);
  }
}
