import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ItemDto } from './dto/item.dto';

@ApiTags('items')
@Controller('api/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) { }

  @Post()
  create(createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @ApiResponse({ status: 200, type: [ItemDto] })
  @Get()
  findAll(): Promise<ItemDto[]> {
    return this.itemsService.findAll();
  }
  @ApiResponse({ status: 200, type: ItemDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<ItemDto> {
    return this.itemsService.findOne(+id);
  }
}
