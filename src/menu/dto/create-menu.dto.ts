import { ApiProperty } from '@nestjs/swagger';

export class CreateMenuDto {
  @ApiProperty({
    name: 'name',
    type: 'string',
    required: true,
    example: '测试菜单',
    description: '菜单名称',
  })
  name: string;
  @ApiProperty({
    name: 'code',
    type: 'string',
    description: '菜单编码',
    required: true,
    example: 'demo_code',
  })
  code: string;
  @ApiProperty({
    name: 'path',
    type: 'string',
    description: '菜单地址',
    required: true,
    example: '/demo_code',
  })
  path: string;
  @ApiProperty({
    name: 'type',
    type: 'string',
    description: '类型 0 是菜单 1 是按钮',
    required: true,
    example: 0,
  })
  type: string;
  @ApiProperty({
    name: 'pid',
    type: 'string',
    description: '上级id',
    example: 0,
  })
  pid: string;
  updateId: string;
  createId: string;
  id: string;
  status: number;
}
