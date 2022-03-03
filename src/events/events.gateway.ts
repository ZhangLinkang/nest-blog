import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { jwtContants } from 'src/auth/jwt.contants';

@WebSocketGateway({ cors: true })
export class EventsGateway {
  private readonly jwtService: JwtService;
  constructor(private readonly eventsService: EventsService) {}
  // @UseGuards(AuthGuard('jwt'))
  @SubscribeMessage('message')
  concent(client, payload) {
    console.log(
      new JwtService({
        secret: jwtContants.secret,
        signOptions: {
          expiresIn: '300s',
        },
      }).verify(client.handshake.query.token),
    );

    // new Strategy({});
    // new JwtStrategy().validate(client.handshake.query.token);
    client.emit('message', '122222');
  }
  @SubscribeMessage('createEvent')
  create(@MessageBody() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @SubscribeMessage('findAllEvents')
  findAll() {
    return this.eventsService.findAll();
  }

  @SubscribeMessage('findOneEvent')
  findOne(@MessageBody() id: number) {
    return this.eventsService.findOne(id);
  }

  @SubscribeMessage('updateEvent')
  update(@MessageBody() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(updateEventDto.id, updateEventDto);
  }

  @SubscribeMessage('removeEvent')
  remove(@MessageBody() id: number) {
    return this.eventsService.remove(id);
  }
}
