import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { MessageDto } from './dto/message.dto';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer() server;

  @SubscribeMessage('send')
  async send(client: Socket, message: MessageDto) {
    client.broadcast.emit('receive', message);
  }
}
