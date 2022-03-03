import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtContants } from 'src/auth/jwt.contants';
// import { jwtContants } from '。。';
// import { User } from '../user/user.entity';

@Injectable({
  scope: 1,
})
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // console.log('111', ExtractJwt.fromHeader('token'));
    super({
      // 获取请求header token值
      jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token'),
      secretOrKey: jwtContants.secret,
      ignoreExpiration: false,
      name: 'cookieJwt',
    });
  }

  async validate(payload: any): Promise<{
    phone: string;
    id: string;
  }> {
    console.log(`JWT验证 - Step 4: 被守卫调用`, payload);
    // console.log(payload, 'payload');
    //payload：jwt-passport认证jwt通过后解码的结果
    return { phone: payload.phone, id: payload.id };
  }
}
