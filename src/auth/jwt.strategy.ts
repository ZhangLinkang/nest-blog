import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtContants } from './jwt.contants';
// import { User } from '../user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // console.log('111', ExtractJwt.fromHeader('token'));
    super({
      jwtFromRequest: ExtractJwt.fromHeader('token'),
      secretOrKey: jwtContants.secret,
      ignoreExpiration: false,
    });
  }

  async validate(payload: any = {}): Promise<{
    phone: string;
    id: string;
  }> {
    console.log(`JWT验证 - Step 4: 被守卫调用`, payload);
    // console.log(payload, 'payload');
    return { ...payload };
  }
}
