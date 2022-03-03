import { createParamDecorator } from '@nestjs/common';
import { LoginResUser } from './dto/login-user.dto';

export const CurrentUser = createParamDecorator((data, req) => {
  // console.log(req.user, data, 'req');
  return req.args[0].user;
});
