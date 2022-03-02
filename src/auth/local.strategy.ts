import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
    this.authService = authService;
  }

  async validate(username: string, password: string): Promise<User> {
    const user = await this.authService.validate(username, password);
    // console.log(user, username, password, 'sss');
    if (user) return user.dataValues;
    else
      throw new UnauthorizedException({
        status: 'error',
        type: 'account',
        currentAuthority: 'guest',
      });
  }
}
