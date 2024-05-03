import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { PerformanceInterceptor } from './performance.interceptor';
import { ApiExcludeEndpoint, ApiHideProperty, ApiTags } from '@nestjs/swagger';
import { ItemsService } from './items/items.service';

@Controller()
@ApiTags('pages')
@UseInterceptors(PerformanceInterceptor)
export class AppController {
  constructor(private readonly appService: AppService, private readonly itemsService: ItemsService) { }

  @ApiExcludeEndpoint()
  @Get()
  @Render('index')
  getIndexPage() {
    return {};
  }

  @ApiExcludeEndpoint()
  @Get('/gallery')
  @Render('gallery')
  async getGalleryPage() {
    return {
      items: await this.itemsService.findAll()

    };
  }

  @ApiExcludeEndpoint()
  @Get('/products')
  @Render('products')
  getProductsPage() {
    return {
      items: [
        {
          img: 'automobile',
          title: 'Automobile diffusor',
          subtitle: 'the scent is always with you',
          price: 20
        }, {
          img: 'automobile',
          title: 'Automobile diffusor',
          subtitle: 'the scent is always with you',
          price: 20
        }, {
          img: 'automobile',
          title: 'Automobile diffusor',
          subtitle: 'the scent is always with you',
          price: 20
        }, {
          img: 'automobile',
          title: 'Automobile diffusor',
          subtitle: 'the scent is always with you',
          price: 20
        },
      ]

    };
  }
}
