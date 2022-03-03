import { Column, Table, Model } from 'sequelize-typescript';
import Sequelize from 'sequelize';
import { CreateMenuDto } from '../dto/create-menu.dto';
@Table({
  tableName: 'menu',
})
export class Menu extends Model<CreateMenuDto> {
  @Column({
    comment: '菜单名',
    type: Sequelize.STRING(20),
    allowNull: false,
  })
  name: string;
  @Column({
    comment: '菜单编码',
    type: Sequelize.STRING(20),
    allowNull: false,
  })
  code: string;
  @Column({
    comment: '菜单地址',
    type: Sequelize.STRING(20),
  })
  path: string;
  @Column({
    comment: '类型 0 是菜单 1 是按钮',
    type: Sequelize.INTEGER({
      length: 1,
    }),
    allowNull: false,
  })
  type: 0 | 1;
  @Column({
    comment: '创建人id',
    type: Sequelize.STRING({
      length: 20,
    }),
    allowNull: false,
  })
  createId: string;
  @Column({
    comment: '修改人id',
    type: Sequelize.STRING({
      length: 20,
    }),
    allowNull: false,
  })
  updateId: string;
  @Column({
    comment: '父级id null代表是最上级',
    type: Sequelize.STRING({
      length: 20,
    }),
  })
  pid: string;
  @Column({
    comment: '类型 0 正常 1 删除',
    type: Sequelize.INTEGER({
      length: 1,
    }),
    allowNull: false,
  })
  status: 0 | 1;
}
