import { ApiProperty } from '@nestjs/swagger';
import { Sex } from './create-user.dto';

/**
 * 登录
 */
export class LoginUser {
  @ApiProperty({
    name: 'username',
    description: '用户登录',
    type: 'string',
    example: 'root',
  })
  username: string;
  @ApiProperty({
    name: 'password',
    description: '密码',
    type: 'string',
    example: 'e10adc3949ba59abbe56e057f20f883e',
  })
  password: string;
}

/**
 * 登录返回值
 */
export class LoginResUser {
  @ApiProperty({
    name: 'phone',
    type: 'string',
  })
  phone: string;
  @ApiProperty({
    name: 'name',
    type: 'string',
  })
  name: string;
  @ApiProperty({
    name: 'sex',
    type: 'string',
  })
  'sex': Sex;
  @ApiProperty({
    name: 'phone',
    type: 'string',
  })
  @ApiProperty({
    name: 'status',
    description: '0||1',
    type: 'string',
  })
  'status': 0 | 1;
  @ApiProperty({
    name: 'email',
    type: 'string',
  })
  'email': string;
  @ApiProperty({
    name: 'headPortrait',
    type: 'string',
  })
  'headPortrait': string;
}
