import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { PerformanceInterceptor } from './performance.interceptor';

@Controller()

@UseInterceptors(PerformanceInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  getIndexPage() {
    return {};
  }

  @Get('/gallery')
  @Render('gallery')
  getGalleryPage() {
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
