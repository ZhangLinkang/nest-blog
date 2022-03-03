import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsGateway } from './events.gateway';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtContants } from 'src/auth/jwt.contants';

@Module({
  imports: [],
  providers: [EventsGateway, EventsService, JwtStrategy],
})
export class EventsModule {}
