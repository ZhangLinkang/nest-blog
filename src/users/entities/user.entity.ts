import { Table, Column, Model } from 'sequelize-typescript';
import Sequelize from 'sequelize';
import { CreateUserDto } from '../dto/create-user.dto';

@Table({
  tableName: 'user',
})
export class User extends Model<CreateUserDto> {
  @Column({
    comment: '用户姓名',
    type: Sequelize.STRING(20),
    allowNull: false,
  })
  name: string;
  @Column({
    comment: '生日',
    type: Sequelize.STRING(19),
    allowNull: false,
  })
  birth: string;
  /**
   * 密码
   */
  @Column({
    comment: '密码',
    type: Sequelize.STRING(32),
    allowNull: false,
  })
  password: string;

  @Column({
    type: Sequelize.INTEGER({
      length: 1,
    }),
    comment: '0正常状态 1非正常',
    allowNull: false,
  })
  status: number;
  /**
   * 手机号
   */
  @Column({
    type: Sequelize.STRING(11),
    comment: '手机号',
    allowNull: true,
  })
  phone: string;
  /**
   * 邮箱
   */
  @Column({
    type: Sequelize.STRING(100),
    comment: '邮箱',
    allowNull: false,
  })
  Email: string;
  /**
   * 角色表
   */
  @Column({
    type: Sequelize.STRING(100),
    comment: '角色 逗号拼接',
    allowNull: true,
  })
  tags: string;
  /**
   * 密码盐
   */
  @Column({
    type: Sequelize.STRING(11),
    comment: '密码盐',
  })
  salt: string;
  /**
   * 性别
   */
  @Column({
    type: Sequelize.INTEGER({
      length: 1,
    }),
    comment: '性别 0 男 1 女 2 其他',
    allowNull: false,
  })
  sex: number;
}
