import { ApiProperty } from '@nestjs/swagger';

/**
 * 新增实体类
 */
export class LoginUser {
  @ApiProperty({
    name: 'name',
    description: '用户登录',
    type: 'string',
    example: 'root',
  })
  username: string;
  @ApiProperty({
    name: 'password',
    description: '密码',
    type: 'string',
    example: 'md5(123456)',
  })
  password: string;
}
