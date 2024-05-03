import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module';
import { HistoryModule } from './history/history.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { ItemsService } from './items/items.service';
import { AllExceptionsFilter } from './exception-filter';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ConfigModule.forRoot(), ItemsModule, HistoryModule, UsersModule, ChatModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, ItemsService, AllExceptionsFilter],
})
export class AppModule { }
