import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module';
import { HistoryModule } from './history/history.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), ItemsModule, HistoryModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
